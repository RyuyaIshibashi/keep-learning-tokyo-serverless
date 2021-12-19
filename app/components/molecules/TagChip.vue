<template>
  <div>
    <v-chip
      v-for="tag in tags"
      :key="tag.fields.id"
      link
      :small="isSmall"
      color="grey lighten-2"
      class="chip-overflow"
      :class="{ 'mt-1': isSmall, 'mr-1': isSmall,
                'mt-2': !isSmall, 'mr-2': !isSmall }"
      @click="gotoTagArticles(tag.fields.title)"
    >
      <div v-if="!isCount">
        {{ tag.fields.title }}
      </div>
      <div v-else>
        <span class="primary--text">
          {{ `${tag.fields.title}:` }}
        </span>
        <span class="pl-1">
          {{ `${postsLength(tag)}記事` }}
        </span>
      </div>
    </v-chip>
  </div>
</template>
<script>
export default {
  name: 'TagChip',
  props: {
    tags: {
      type: Array,
      required: true,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    isCount: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    gotoTagArticles (id) {
      this.$router.push(`/tag/${id}`);
    },
    postsLength (tag) {
      if (tag.fields.posts) {
        return tag.fields.posts.length;
      }
      return 0;
    },
  },
};
</script>
