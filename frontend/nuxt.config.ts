// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    "./auth", "./ui"
  ],
  css: [
    "~/assets/scss/main.scss"
  ],
});
