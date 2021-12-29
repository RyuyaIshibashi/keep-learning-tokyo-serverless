<template>
  <div v-if="category.fields">
    <v-row
      class="mt-2 mb-16"
    >
      <h1
        class="font-weight-bold"
      >
        カテゴリー：{{ category.fields.title }}
      </h1>
    </v-row>
    <Posts
      :posts="posts"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import util from '@/scripts/util';
import Posts from '@/components/organisms/Posts';
import metatag from '@/metatag/metatag';

export default Vue.extend({
  name: 'CategoryPosts',
  components: {
    Posts,
  },
  mixins: [metatag, util],
  async asyncData ({ store, route }) {
    const category = await store.dispatch('contentfulGetCategory', {
      'fields.title': route.params.id,
    });

    const posts = await store.dispatch('contentfulGetCategoryPosts', {
      'fields.category.sys.id': category.sys.id,
    });
    posts.forEach((p) => {
      const post = p;
      post.sys.locatedCreatedAt = util.methods.$_toLocalDate(post.sys.createdAt);
      if (post.fields.body.length > 150) {
        post.fields.beginning = `${post.fields.body.substr(0, 150)} ...`;
      } else {
        post.fields.beginning = post.fields.body;
      }
    });

    return {
      category,
      posts,
      meta: {
        title: `カテゴリー：${category.fields.title}`,
        description: `カテゴリー：${category.fields.title}`,
        imgUrl: category.fields.image.fields.file.url,
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.post-area .text-caption {
  margin-top: 24px;
}
.post-area:first-child .text-caption {
    margin-top: 8px;
}
.beginning {
  color: $color-grey-01;
}
</style>
