// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
  ],
  imports: {
    dirs: ["store", "middleware", "composables", "plugins"],
  },
  runtimeConfig: {
    public: {
      baseURL: "http://localhost:8000",
      auth: {
        referer: "http://localhost:3000",
        endpoints: {
          csfr: {
            url: "/sanctum/csrf-cookie",
            method: "GET",
          },
          login: {
            url: "/login",
            method: "POST",
          },
          user: {
            url: "/api/user",
            method: "GET",
          },
          logout: {
            url: "/logout",
            method: "POST",
          },
        }
      }
    }
  },
});
