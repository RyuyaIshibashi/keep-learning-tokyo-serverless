<template>
  <div v-if="tag.fields">
    <v-row
      class="mt-2 mb-16"
    >
      <h1
        class="font-weight-bold"
      >
        タグ：{{ tag.fields.title }}
      </h1>
    </v-row>
    <Posts
      :posts="posts"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import metatag from '@/metatag/metatag';
import util from '@/scripts/util';
import Posts from '@/components/organisms/Posts';

export default Vue.extend({
  name: 'TagPosts',
  components: {
    Posts
  },
  mixins: [metatag, util],
  async asyncData ({ store, route }) {
    const tag = await store.dispatch('contentfulGetTag', {
      'fields.title': route.params.id
    });

    const posts = await store.dispatch('contentfulGetTagPosts', {
      'fields.tags.sys.id': tag.sys.id
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
      tag,
      posts,
      meta: {
        title: `タグ：${tag.fields.title}`,
        description: `タグ：${tag.fields.title}`,
        imgUrl: ''
      }
    };
  },
  methods: {
    gotoArticle (id) {
      this.$router.push(`/${id}`);
    }
  }
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
