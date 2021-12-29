import itemTypes from '@/scripts/itemTypes';
import util from '@/scripts/util';

export default async function ({ store }) {
  if (!store.state.tags.length) {
    const tags = await util.methods.$_getAllItems(store, itemTypes.Tag);
    store.commit('setTags', tags);
  }
}
