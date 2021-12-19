import * as methodTypes from '../scripts/api/api';
import client from '../scripts/api/client';

export default {
  async callContentfulApi (ctx, payload) {
    const entry = await client.callContentfulApi(payload.api, payload.params);
    return entry;
  },
  async contentfulGetPost (ctx, payload) {
    const posts = await ctx.dispatch('callContentfulApi', {
      api: methodTypes.CONTENTFUL_GET_ENTRIES,
      params: {
        content_type: 'post',
        ...payload,
      },
    });
    return posts.items[0];
  },
  async contentfulGetAllPosts (ctx) {
    const posts = await ctx.dispatch('callContentfulApi', {
      api: methodTypes.CONTENTFUL_GET_ENTRIES,
      params: {
        content_type: 'post',
        order: '-sys.createdAt',
      },
    });
    return posts.items;
  },
  async contentfulGetTag (ctx, payload) {
    const tags = await ctx.dispatch('callContentfulApi', {
      api: methodTypes.CONTENTFUL_GET_ENTRIES,
      params: {
        content_type: 'tag',
        ...payload,
      },
    });
    return tags.items[0];
  },
  async contentfulGetAllTags (ctx) {
    const tags = await ctx.dispatch('callContentfulApi', {
      api: methodTypes.CONTENTFUL_GET_ENTRIES,
      params: {
        content_type: 'tag',
        order: '-sys.createdAt',
      },
    });
    return tags.items;
  },
  async contentfulGetTagPosts (ctx, payload) {
    const tags = await ctx.dispatch('callContentfulApi', {
      api: methodTypes.CONTENTFUL_GET_ENTRIES,
      params: {
        content_type: 'post',
        ...payload,
        order: '-sys.createdAt',
      },
    });
    return tags.items;
  },
  async contentfulGetCategory (ctx, payload) {
    const categories = await ctx.dispatch('callContentfulApi', {
      api: methodTypes.CONTENTFUL_GET_ENTRIES,
      params: {
        content_type: 'category',
        ...payload,
      },
    });
    return categories.items[0];
  },
  async contentfulGetAllCategories (ctx) {
    const categories = await ctx.dispatch('callContentfulApi', {
      api: methodTypes.CONTENTFUL_GET_ENTRIES,
      params: {
        content_type: 'category',
        order: '-sys.createdAt',
      },
    });
    return categories.items;
  },
  async contentfulGetCategoryPosts (ctx, payload) {
    const categories = await ctx.dispatch('callContentfulApi', {
      api: methodTypes.CONTENTFUL_GET_ENTRIES,
      params: {
        content_type: 'post',
        ...payload,
        order: '-sys.createdAt',
      },
    });
    return categories.items;
  },
};
