import { defineNuxtPlugin } from "#app";
import { useAuthStore } from "#imports";
import fs from "fs";

export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.server) {
    await server();
    return;
  } else if (process.client) {
    await client();
    return;
  }
});

async function server() {
  // TODO: update user here instead of in mount, need to learn more about laravel and nuxt3
  await useAuthStore().updateUser();
}

async function client() {
  // useAuthStore().updateUser();
}
