import { useAuthStore } from "@/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  if (useAuthStore().user === null) {
    // return abortNavigation();
    return navigateTo("/login");
  }
});
