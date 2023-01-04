import { defineNuxtPlugin } from "#app";
import { useAuthStore } from "@/store/auth";

export default defineNuxtPlugin(async (nuxtApp) => {
  console.log("init.ts");

  if (process.server) {
    server();
    return;
  } else if (process.client) {
    client();
    return;
  }
});

function server() {
  // ..
}

function client() {
  useAuthStore().updateUser();
}
