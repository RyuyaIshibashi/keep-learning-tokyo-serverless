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
    }
  }
};
