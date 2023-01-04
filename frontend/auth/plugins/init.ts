import { defineNuxtPlugin } from "#app";
import { useAuthStore } from "../store/auth";

export default defineNuxtPlugin(async (nuxtApp) => {
  console.log("init.ts");

  console.log(nuxtApp);

  if (process.server) {
    await server();
    return;
  } else if (process.client) {
    await client();
    return;
  }
});

async function server() {
  // ..
  // await useAuthStore().updateUser();
  await $fetch("http://localhost:8000/sanctum/csrf-cookie", {
    method: "GET",
    credentials: "include",
  });

  const { data, error }: any = await $fetch("http://localhost:8000/api/user", {
    method: "GET",
    credentials: "include",
    headers: {
      "accept": "application/json",
    },
  });
}

async function client() {
  // useAuthStore().updateUser();
}
