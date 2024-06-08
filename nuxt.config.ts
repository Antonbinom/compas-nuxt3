// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-swiper",
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
