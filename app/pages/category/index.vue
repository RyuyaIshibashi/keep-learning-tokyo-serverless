<template>
  <div>
    <v-row
      class="mt-2"
    >
      <h1
        class="font-weight-bold"
      >
        カテゴリーの一覧
      </h1>
    </v-row>
    <div
      v-if="categories.length"
      class="tag-area"
    >
      <v-row class="mt-8">
        <CategoryChip
          :categories="categories"
          :is-count="true"
        />
      </v-row>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import util from '@/scripts/util';
import CategoryChip from '@/components/molecules/CategoryChip';
import metatag from '@/metatag/metatag';

export default Vue.extend({
  name: 'CategoryIndex',
  components: {
    CategoryChip
  },
  mixins: [metatag, util],
  async asyncData ({ store }) {
    const categories = await store.dispatch('contentfulGetAllCategories');
    await Promise.all(categories.map(async (category) => {
      const posts = await store.dispatch('contentfulGetCategoryPosts', {
        'fields.category.sys.id': category.sys.id
      });
      category.fields.posts = posts;
    }));
    categories.sort((a, b) => {
      if (a.fields.posts.length > b.fields.posts.length) { return -1; }
      if (a.fields.posts.length < b.fields.posts.length) { return 1; }
      return 0;
    });

    return {
      categories,
      meta: {
        title: 'カテゴリーの一覧',
        description: 'カテゴリーの一覧',
        imgUrl: null
      }
    };
  }
});
</script>
<style lang="scss" scoped>
::v-deep .chip-overflow {
  @media (max-width: 1264px) {
    max-width: calc(100vw - 24px);
  }
  padding: 5px 12px;
}
::v-deep .v-chip__content {
  display: inline-block !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
