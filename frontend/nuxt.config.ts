// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    "./auth", "./ui"
  ],
  css: [
    "~/assets/scss/main.scss"
  ],
  runtimeConfig: {
    public: {
      auth: {
        baseURL: "http://localhost:8000",
        referer: "http://localhost:3000",
        endpoints: {
          csfr: {
            url: "/sanctum/csrf-cookie",
          },
          login: {
            url: "/login",
          },
          user: {
            url: "/api/user",
          },
          logout: {
            url: "/logout",
          },
        }
      }
    }
  },
});
