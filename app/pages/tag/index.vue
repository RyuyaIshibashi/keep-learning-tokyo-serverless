<template>
  <div>
    <v-row
      class="mt-2"
    >
      <h1
        class="font-weight-bold"
      >
        タグの一覧
      </h1>
    </v-row>
    <div
      v-if="tags.length"
      class="tag-area"
    >
      <v-row class="mt-8">
        <TagChip
          :tags="tags"
          :is-count="true"
        />
      </v-row>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import metatag from '@/metatag/metatag';
import TagChip from '@/components/molecules/TagChip';

export default Vue.extend({
  name: 'TagIndex',
  components: {
    TagChip,
  },
  mixins: [metatag],
  asyncData () {
    return {
      meta: {
        title: 'タグの一覧',
        description: 'タグの一覧',
        imgUrl: null,
      },
    };
  },
  computed: {
    tags () {
      return this.$store.state.tags;
    },
  },
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
