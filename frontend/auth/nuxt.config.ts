// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
  ],
  imports: {
    dirs: ["store", "middleware", "composables", "plugins"],
  },
});
