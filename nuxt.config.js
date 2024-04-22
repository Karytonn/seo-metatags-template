export default {

    // #########
    // ********* CHANGE ALL DATA CONTENT ***********
    // >>>>>>>>> For NUXT 3, add head inside of app: {...}
    // #########

    head: {
      title: 'Gatos Galácticos LTDA',
      htmlAttrs: {
        lang: 'pt-br',
      },
      meta: [
        // Meta tags essenciais
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'language', name: 'language', content: 'Portuguese' },
    
        // Meta tags primárias
        { hid: 'description', name: 'description', content: 'Website dos Gatos Galácticos LTDA - O melhor lugar para encontrar gatos intergalácticos!' },
    
        // Meta tags secundárias
        { hid: 'application-name', name: 'application-name', content: 'Gatos Galácticos LTDA' },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Gatos Galácticos LTDA' },
        { hid: 'author', name: 'author', content: 'author-name...' },
        { hid: 'copyright', name: 'copyright', content: 'copyright...' },
        { hid: 'creator', name: 'creator', content: 'Karytonn DEV' },

    
        // Open Graph / Facebook e WhatsApp
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: 'Gatos Galácticos LTDA' },
        { hid: 'og:description', property: 'og:description', content: 'Website dos Gatos Galácticos LTDA - O melhor lugar para encontrar gatos intergalácticos!' },
        { hid: 'og:url', property: 'og:url', content: 'https://gatosgalacticos.com.br' },
        { hid: 'og:image', property: 'og:image', content: '/og-image.png' },
        { hid: 'og:image:width', property: 'og:image:width', content: '600' },
        { hid: 'og:image:height', property: 'og:image:height', content: '315' },
        { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://gatosgalacticos.com.br/og-image.png' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: 'alternative-image-name' },
        { hid: 'fb:page_id', property: 'fb:page_id', content: '1086849938XXXXX' },
    
        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Gatos Galácticos LTDA' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Website dos Gatos Galácticos LTDA - O melhor lugar para encontrar gatos intergalácticos!' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://gatosgalacticos.com.br/og-image.png' },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'alternative-image-name...' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@gatosgalacticos...' },
        { hid: 'twitter:creator', name: 'twitter:creator', content: 'Karytonn DEV' },
        { hid: 'twitter:domain', name: 'twitter:domain', content: 'https://gatosgalacticos.com.br' },
    
    
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    },        
  
    css: [],
  
    plugins: [],
  
    components: [],
  
    modules: [],
  
  }
  