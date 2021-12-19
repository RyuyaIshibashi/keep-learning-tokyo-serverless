import util from '@/scripts/util';

export default async function ({ store }) {
  if (!store.state.tags.length) {
    const tags = await util.methods.$_getAllTags(store);
    store.commit('setTags', tags);
  }
}
