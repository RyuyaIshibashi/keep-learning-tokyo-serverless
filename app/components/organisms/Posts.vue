<template>
  <div v-if="posts.length">
    <div
      v-for="post in posts"
      :key="post.fields.id"
      class="post-area"
    >
      <v-row class="text-caption d-flex align-center">
        <CategoryChip
          :categories="[post.fields.category]"
          :is-small="true"
        />
        <div>
          <v-icon size="0.8rem" class="ml-2">
            mdi-clock
          </v-icon>
          {{ post.sys.locatedCreatedAt }}
        </div>
      </v-row>
      <v-row
        class="mt-2 link-hover"
        @click="gotoArticle(post.fields.name)"
      >
        <h2 class="link-title text-h5 font-weight-bold">
          {{ post.fields.title }}
        </h2>
      </v-row>
      <v-row class="mt-1">
        <TagChip
          :tags="post.fields.tags"
          :is-small="true"
        />
      </v-row>
      <v-row
        class="mt-2 mb-4"
      >
        <VueMarkdown
          class="text-body-2 beginning"
          :source="post.fields.beginning"
        />
      </v-row>
      <v-divider />
    </div>
  </div>
</template>
<script>
import VueMarkdown from 'vue-markdown';
import CategoryChip from '@/components/molecules/CategoryChip';
import TagChip from '@/components/molecules/TagChip';

export default {
  name: 'Posts',
  components: {
    VueMarkdown, CategoryChip, TagChip,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    gotoArticle (id) {
      this.$router.push(`/${id}`);
    },
  },
};
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
  word-break: break-all;
}
</style>
