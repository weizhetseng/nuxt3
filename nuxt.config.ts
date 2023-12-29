// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  build: {
    transpile: ['vue-countup-v3']
  },
  modules: ['@nuxtjs/i18n', '@pinia/nuxt', 'dayjs-nuxt', '@vee-validate/nuxt'],
  css: ['~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  i18n: {
    baseUrl: 'http://localhost:3000',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'tw',
        iso: 'zh-TW',
        file: 'zh-tw.json'
      }
    ],
    defaultLocale: 'tw'
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://hongyihe.com/api',
        changeOrigin: true
      }
    },

    routeRules: {
      '/api/**': {
        proxy: 'https://hongyihe.com/api/**'
      }
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => /^(swiper|swiper-slide|swiper-container)$/.test(tag)
    }
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VForm',
      Field: 'VField',
      FieldArray: 'VFieldArray',
      ErrorMessage: 'VErrorMessage'
    }
  }
})
