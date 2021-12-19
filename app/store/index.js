// import Vue from 'vue';
// import Vuex, { Store } from 'vuex';
import actions from './actions';

// Vue.use(Vuex);

// export default new Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions,
//   modules: {
//   }
// });

const state = () => ({
  tags: [],
});
const mutations = {
  setTags (state, val) {
    state.tags = val;
  },
};
export { state, mutations, actions };
