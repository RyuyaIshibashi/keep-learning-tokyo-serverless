const contentful = require('contentful');
const config = {
  space: process.env.VUE_APP_CTF_SPACE_ID,
  accessToken: process.env.VUE_APP_CTF_CDA_ACCESS_TOKEN
};
const createClient = () => contentful.createClient(config);

export default {
  async callContentfulApi (api, params) {
    const entry = await createClient()[api](params);
    return entry;
  }
};
