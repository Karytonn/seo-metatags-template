export default {

    // #########
    // ********* CHANGE ALL DATA CONTENT ***********
    // #########

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'iFastcell',
      htmlAttrs: {
        lang: 'pt-br',
      },
      meta: [
        // Essetial Meta Tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=yes' },
  
        // Primary Meta Tags
        { hid: 'description', name: 'description', content: 'Assistência técnica em celular, especializada Apple e venda de aparelhos com garantia' },
        
        // Secondary Meta Tags
        { hid: 'application-name', name: 'application-name', content: 'Ifastcell' },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Ifastcell' },
        { hid: 'author', name: 'author', content: 'Ifastcell' },
        { hid: 'copyright', name: 'copyright', content: 'Ifastcell' },
        { hid: 'creator', name: 'creator', content: 'Karytonn DEV' },
  
        // Google Search Console
        { hid: 'google-site-verification', name: 'google-site-verification', content: process.env.GOOGLE_SEARCH_CONSOLE },
  
        // Open Graph / Facebook and WhatsApp
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: 'Ifastcell' },
        { hid: 'og:description', property: 'og:description', content: 'Assistência técnica em celular, especializada Apple e venda de aparelhos com garantia' },
        { hid: 'og:url', property: 'og:url', content: 'https://ifastcell.com.br' },
        { hid: 'og:image', property: 'og:image', content: '/og-image.png' },
        { hid: 'og:image:width', property: 'og:image:width', content: '600' },
        { hid: 'og:image:height', property: 'og:image:height', content: '315' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: 'Ifastcell' },
        { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://ifastcell.com.br/og-image.png' },
        { hid: 'fb:page_id', property: 'fb:page_id', content: '108684993812345' },
  
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Ifastcell' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Assistência técnica em celular, especializada Apple e venda de aparelhos com garantia' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://ifastcell.com.br/og-image.png' },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Ifastcell' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@ifastcell' },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@karytonn' },
        { hid: 'twitter:domain', name: 'twitter:domain', content: 'https://ifastcell.com.br' },
  
  
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    },
  
    css: [],
  
    plugins: [],
  
    components: [{ path: '@/components', pathPrefix: false }],
  
    buildModules: [],
  
    modules: [],
  
    build: {},
  
  }
  