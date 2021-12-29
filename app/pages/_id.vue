<template>
  <div
    v-if="post.fields"
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
      class="mt-2"
    >
      <h1
        class="font-weight-bold"
      >
        {{ post.fields.title }}
      </h1>
    </v-row>
    <v-row class="mt-1">
      <TagChip
        :tags="post.fields.tags"
      />
    </v-row>
    <v-row
      class="mt-8"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="6"
      >
        <v-img
          :src="meta.imgUrl"
          max-width="400px"
        />
      </v-col>
    </v-row>
    <v-row
      v-highlight
      class="mt-12 mb-4 article-body"
    >
      <VueMarkdown
        id="post"
        class="text-body-2 article"
        :anchor-attributes="anchorAttributes"
        :source="post.fields.body"
      />
    </v-row>
  </div>
</template>
<script>
import Vue from 'vue';
import VueMarkdown from 'vue-markdown';
import metatag from '@/metatag/metatag';
import util from '@/scripts/util';
import CategoryChip from '@/components/molecules/CategoryChip';
import TagChip from '@/components/molecules/TagChip';

export default Vue.extend({
  name: 'Post',
  components: {
    CategoryChip, TagChip, VueMarkdown,
  },
  mixins: [metatag, util],
  async asyncData ({ store, route }) {
    const post = await store.dispatch('contentfulGetPost', {
      'fields.name': route.params.id,
    });
    post.sys.locatedCreatedAt = util.methods.$_toLocalDate(post.sys.createdAt);

    const imgUrl =
      post.fields.image
        ? post.fields.image.fields.file.url
        : post.fields.category.fields.image.fields.file.url;

    return {
      post,
      meta: {
        title: post.fields.title,
        description: post.fields.title,
        imgUrl,
      },
    };
  },
  data: () => ({
    anchorAttributes: {
      target: '_blank',
      rel: 'noopener noreferrer nofollow',
    },
  }),
  computed: {
    fontSize () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '3em';
        default: return '5em';
      }
    },
  },
});
</script>
<style>
</style>
<style lang="scss" scoped>
.post-area .text-caption {
  margin-top: 8px;
}
::v-deep .article-body {
  word-break: break-all;
  .article {
    width: 100%;
  }
  p {
    margin-bottom: 24px;
  }
  h3 {
    margin-top: 60px;
    margin-bottom: 24px;
    padding: 0.5em;
    font-size: 1.5em;
    color: #010101;/*文字色*/
    background: #eaf3ff;/*背景色*/
    border-bottom: solid 3px #516ab6;/*下線*/
  }
  h4 {
    margin-top: 48px;
    margin-bottom: 24px;
    font-size: 1.4em;
    position: relative;
    padding-left: 1.4em;/*アイコン分のスペース*/
  }
  h4:before {
    font-family: "Font Awesome 5 Free";
    content: "\f00c";/*アイコンのユニコード*/
    font-weight: 900;
    position: absolute;/*絶対位置*/
    font-size: 0.9em;/*サイズ*/
    left: 0;/*アイコンの位置*/
    top: 0;/*アイコンの位置*/
    color: #5ab9ff; /*アイコン色*/
    font-weight: 900;
  }
  h5 {
    margin-top: 48px;
    margin-bottom: 24px;
    padding-bottom: 5px;
    border-bottom: solid 1.5px black;
    font-size: 1.2em;
  }
  ul, ol {
    margin-top: 24px;
    margin-bottom: 48px;
    li {
      padding-left: 0.5rem;
      font-weight: bold;
      margin-bottom: 24px;
    }
  }
  :not(pre) > code {
    font-family: Consolas, Menlo, Monaco, -apple-system, BlinkMacSystemFont, "Segoe UI",
                Meiryo, monospace;
    display: inline-block;
    padding: 0.1em 0.25em; /* 文字周りの余白 */
    color: #444; /* 文字色 */
    background-color: #e7edf3!important; /* 背景色 */
    border-radius: 3px; /* 角丸 */
    border: solid 1px #d6dde4; /* 枠線 */
  }
  code {
    background-color: rgba(0, 0, 0, 0)!important;;
  }
  pre {
    margin-bottom: 40px;
    width: 792px;
    @media (max-width: 1904px) {
      width: 612px;
    }
    @media (max-width: 1264px) {
      width: 876px;
    }
    @media (max-width: 992px) {
      width: calc(100vw - calc(100vw - 100%));;
    }
  }
  img {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .border {
    border: solid 0.5px;
  }
}
</style>
