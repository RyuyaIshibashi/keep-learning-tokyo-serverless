<template>
  <div class="mb-3">
    <div class="About mb-8">
      <v-row>
        <v-col>
          <h3>
            About
          </h3>
        </v-col>
        <v-col
          cols="2"
          class="d-lg-none btn-width"
        >
          <v-btn
            icon
            small
            text
            @click="closeDrawer"
          >
            <v-icon>
              mdi-close
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <div class="text-body-2">
          都内在住エンジニアによる技術ブログ。<br>
          VueやJavascript、AWSに関する技術メモを発信しています。
        </div>
      </v-row>
    </div>
    <div class="hot-tags mb-3">
      <v-row>
        <v-col class="hot-tags-title">
          <h3 class="pr-3">
            Hot Tags
          </h3>
          <NuxtLink to="/tag">
            See all
          </NuxtLink>
        </v-col>
      </v-row>
      <v-row>
        <TagChip
          :tags="tags"
          :is-small="true"
        />
      </v-row>
    </div>
  </div>
</template>
<script>
import TagChip from '@/components/molecules/TagChip';

export default {
  name: 'SideMenu',
  components: {
    TagChip,
  },
  props: {
    isDrawer: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tags () {
      return this.$store.state.tags.slice(0, 10);
    },
  },
  methods: {
    closeDrawer () {
      this.$emit('close-drawer');
    },
  },
};
</script>
<style lang="scss" scoped>
.hot-tags-title {
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
