module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Get Fit Questing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Get fit yo!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Add global CSS. Will be inlined in the head tag
  */
  css: [],

  /*
  ** Params for the generated web app manifest.
  ** See https://developer.mozilla.org/en-US/docs/Web/Manifest for available options
  */
  manifest: {
    name: 'Get Fit Questing',
    lang: 'en',
    background_color: '#fff',
    theme_color: '#1f2532'
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Enable HTTP2/Push
  */
  render: {
    http2: { push: true }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    /*
    ** Vendored modules
    */
    vendor: []
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  /*
  ** Axios module config
  */
  axios: {
    baseURL: 'http://localhost:8000/api',
    debug: false
  }
}
