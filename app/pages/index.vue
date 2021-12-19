<template>
  <Posts
    :posts="posts"
  />
</template>

<script>
import Vue from 'vue';
import metatag from '@/metatag/metatag';
import util from '@/scripts/util';
import Posts from '@/components/organisms/Posts';

export default Vue.extend({
  name: 'Index',
  components: {
    Posts
  },
  mixins: [metatag, util],
  async asyncData ({ store }) {
    const posts = await store.dispatch('contentfulGetAllPosts');
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
      posts,
      meta: {}
    };
  }
});
</script>
