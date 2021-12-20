<template>
  <div class>
    <div class="about mb-8">
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
    <div class="hot-tags mb-8">
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
    <div
      v-if="$route.name === 'id'"
      id="catalog"
      class="catalog"
      :class="{fixed: isFixed}"
    >
      <v-row>
        <v-col class="catalog-title">
          <h3 class="pr-3">
            Catalog
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <SideCatalog
          class="catalog"
          v-bind="catalogProps"
        />
      </v-row>
    </div>
  </div>
</template>
<script>
import SideCatalog from 'vue-side-catalog';
import TagChip from '@/components/molecules/TagChip';
import 'vue-side-catalog/lib/vue-side-catalog.css';

export default {
  name: 'SideMenu',
  components: {
    SideCatalog,
    TagChip,
  },
  props: {
    isFixed: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      catalogProps: {
        container: '#post',
        levelList: ['h3', 'h4', 'h5'],
      },
    };
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
.fixed {
  position: fixed;
  top: 28px;
}
</style>
