const { ENV } = require('./configs/env');

const routerConfig = {};
if (ENV.BASE_URL) {
  routerConfig.base = ENV.BASE_URL;
}

const generate = {};
if (ENV.GENERATE_ERROR_PAGE) {
  generate.routes = ['/403', '/404', '/500'];
}

module.exports = {
  ssr: 'true',

  srcDir: 'app',

  router: {
    ...routerConfig,
  },

  render: {
    /**
     * compression を通すと2重に Gzip がかかりブラウザが表示できないので
     * なにもしないミドルウェアを定義しておく
     */
    compressor: (req, res, next) => {
      next();
    },
  },

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/assets/favicon.ico' }],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    '@mdi/font/css/materialdesignicons.css',
    'vue-code-highlight/themes/prism-okaidia.css',
  ],

  styleResources: {
    scss: [
      '@/assets/css/vars.scss',
    ],
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/main.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-fonts', { families: { 'Noto+Sans+JP': true }, display: 'body', download: true, inject: true }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: false,
    optionsPath: '~/app/vuetify.options.js',
    customVariables: [],
    theme: {
      light: true,
    },
  },

  /*
   ** Build configuration
   */
  build: {},

  generate,

  env: {
    GENERATE_ERROR_PAGE: ENV.GENERATE_ERROR_PAGE,
    NODE_VERSION: process.versions.node,
  },

  telemetry: false,
};
