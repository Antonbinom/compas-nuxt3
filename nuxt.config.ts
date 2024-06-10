// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-swiper",
    [
      "nuxt-viewport",
      {
        viewport: {
          breakpoints: {
            desktop: 1024,
            desktopMedium: 1280,
            desktopWide: 1600,

            mobile: 320,
            mobileMedium: 375,
            mobileWide: 576,

            tablet: 768,
          },

          cookie: {
            expires: 365, // 365 days
            name: "viewport",
            path: "/",
            sameSite: "Strict",
            secure: true,
          },

          defaultBreakpoints: {
            desktop: "desktop",
            mobile: "mobile",
            tablet: "tablet",
          },

          fallbackBreakpoint: "desktop",
        },
      },
    ],
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "PT Sans": true,
          Lato: [400, 700],
          Inter: [400, 700],
          Raleway: {
            wght: [400, 700],
          },
        },
      },
    ],
    "nuxt-viewport",
  ],

  swiper: {
    styleLang: "scss",
    modules: ["navigation", "pagination"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/global.scss";',
        },
      },
    },
  },
});
