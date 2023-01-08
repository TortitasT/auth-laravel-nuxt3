import { useAuthStore } from "#imports";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) return

  if (useAuthStore().user === null) {
    return navigateTo("/login");
  }
});
