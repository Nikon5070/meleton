const pkg = require('./package');
// eslint-disable-next-line import/no-extraneous-dependencies

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  server: {
    port: 5000,
  },

  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  **
  ** Эти стили будут глобально установлены для всего приложении один раз
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/styl/global.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/generalComponents',
    '@/plugins/element-ui',
    {
      src: '@/plugins/svg4everybody.js',
      mode: 'client',
    },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // https://www.npmjs.com/package/nuxt-webfontloader
    'nuxt-webfontloader',
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60,
    }],
  ],

  svgSprite: {
    input: '~/assets/ico/',
    elementClass: 'svg-icon',
  },

  /*
  ** Styles for each component
  **
  ** Эти стили будут добавляться в каждый компонент
  */
  styleResources: {
    scss: [
      '@/assets/styl/variables.scss',
      '@/assets/styl/mixins.scss',
    ],
  },

  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 366,
    },
  },

  webfontloader: {
    google: {
      families: ['Ubuntu:300,400,500,700&display=swap'],
    },
  },

  /*
  ** Build configuration
  */
  build: {
    // Транспилит только в продакшен билде!
    // Поэтому в дев-билде падает js в IE из-за Свайпера
    transpile: [
      /^element-ui/,
    ],

    /*
    ** You can extend webpack config here
    */
    // eslint-disable-next-line no-shadow
  },
};
