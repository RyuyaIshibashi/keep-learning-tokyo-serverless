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
    >
      <a
        class="link-no-decoration"
        :href="'/category/' + category.fields.title"
      >
        <div
          v-if="!isCount"
          class="white-text"
        >
          {{ category.fields.title }}
        </div>
        <div v-else>
          <span class="white-text">
            {{ `${category.fields.title}:` }}
          </span>
          <span class="pl-1 white-text">
            {{ `${postsLength(category)}記事` }}
          </span>
        </div>
      </a>
    </v-chip>
  </div>
</template>
<script>
export default {
  name: 'CategoryChip',
  props: {
    categories: {
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
    postsLength (category) {
      if (category.fields.posts) {
        return category.fields.posts.length;
      }
      return 0;
    },
  },
};
</script>
