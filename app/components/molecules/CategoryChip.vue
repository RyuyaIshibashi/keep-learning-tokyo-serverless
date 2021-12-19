<template>
  <div>
    <v-chip
      v-for="category in categories"
      :key="category.fields.id"
      link
      :small="isSmall"
      dark
      color="pink"
      label
      class="chip-overflow"
      :class="{ 'mt-1': isSmall, 'mr-1': isSmall,
                'mt-2': !isSmall, 'mr-2': !isSmall }"
      @click="gotoCategoryArticles(category.fields.title)"
    >
      <div v-if="!isCount">
        {{ category.fields.title }}
      </div>
      <div v-else>
        <span>
          {{ `${category.fields.title}:` }}
        </span>
        <span class="pl-1">
          {{ `${postsLength(category)}記事` }}
        </span>
      </div>
    </v-chip>
  </div>
</template>
<script>
export default {
  name: 'CategoryChip',
  props: {
    categories: {
      type: Array,
      required: true
    },
    isSmall: {
      type: Boolean,
      default: false
    },
    isCount: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    gotoCategoryArticles (id) {
      this.$router.push(`/category/${id}`);
    },
    postsLength (category) {
      if (category.fields.posts) {
        return category.fields.posts.length;
      }
      return 0;
    }
  }
};
</script>
