import head from "./config/head";
import server from "./config/server";

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

export default {
  /* SPA OR SSR */
  ssr: true,

  /* TARGET */
  target: "static",

  /* GLOBAL PAGE HEADERS */
  head: head,

  /* GLOBAL CSS */
  css: ["@/assets/sass/main.scss"],

  /* PLUGINS */
  plugins: ["@/plugins/api.js"],

  /* AUTO IMPORT COMPONENT */
  components: true,

  /* BUILD MODOULES */
  buildModules: ["@nuxtjs/pwa"],

  /* BUILD */
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.scss$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
  },

  /* MODOULES */
  modules: [
    // "@nuxtjs/style-resources",
    "vue-social-sharing/nuxt",
    "@nuxtjs/axios",
    ["@nuxtjs/dotenv", { filename: `.env.${process.env.NODE_ENV}` }],
    'bootstrap-vue/nuxt'
  ],
  bootstrapVue: {
    icons: true,
  },

  /* AXIOS */
  axios: {
    baseURL: process.env.BASE_URL,
  },

  /* PUBLIC RUNTIME */
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },


  /* PRIVATE RUNTIME */
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },

  // styleResources: {
  //   scss: ["./assets/scss/*.scss"],
  // },

  pwa: {
    workbox: false,
  },

  /* SERVER */
  server: process.env.NODE_ENV == "development" ? server : {},
};
