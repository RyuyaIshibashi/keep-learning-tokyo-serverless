import Vue from 'vue';
import moment from 'moment-timezone';

const TO_STRING = Object.prototype.toString;

export default {
  methods: {
    $_typeOf (obj) {
      return TO_STRING.call(obj).slice(8, -1).toLowerCase();
    },
    $_setArray (from, to) {
      const fromLength = from.length;
      const toLength = to.length;
      if (fromLength < toLength) {
        to.splice(fromLength);
      }
      this.$_setObject(from.slice(0, to.length), to);
      if (fromLength > toLength) {
        from.slice(toLength, fromLength).forEach((value) => {
          to.push(value);
        });
      }
    },
    $_setObject (from, to) {
      Object.keys(from).forEach((key) => {
        const fromElement = from[key];
        const toElement = to[key];
        const typeOfFromElement = this.$_typeOf(fromElement);
        const typeOfToElement = this.$_typeOf(toElement);
        if (typeOfFromElement === typeOfToElement) {
          if (typeOfFromElement === 'array') {
            this.$_setArray(fromElement, toElement);
          } else if (typeOfFromElement === 'object') {
            this.$_setObject(fromElement, toElement);
          } else {
            Vue.set(to, key, fromElement);
          }
        } else {
          Vue.set(to, key, fromElement);
        }
      });
    },
    $_toLocalDate (dateTime) {
      return moment(dateTime).format('YYYY/MM/DD HH:mm');
    },
    async $_getAllTags (store) {
      let tags = await store.dispatch('contentfulGetAllTags');
      await Promise.all(tags.map(async (tag) => {
        const posts = await store.dispatch('contentfulGetTagPosts', {
          'fields.tags.sys.id': tag.sys.id,
        });
        tag.fields.posts = posts;
      }));

      tags = tags.filter((tag) => {
        return tag.fields.posts.length > 0;
      })

      tags.sort((a, b) => {
        if (a.fields.posts.length > b.fields.posts.length) { return -1; }
        if (a.fields.posts.length < b.fields.posts.length) { return 1; }
        return 0;
      });

      return tags;
    },
  }
};
