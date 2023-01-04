<template>
  <div class="panel">
    <header>
      <h1>Account</h1>
    </header>

    <div class="panel__content" v-if="user">
      <div>
        <img
          src="https://source.boringavatars.com/beam/120?colors=264653,2a9d8f,e9c46a,f4a261,e76f51"
          alt="Avatar"
        />
        <h2>{{ user.name }}</h2>
      </div>

      <h3>{{ user.email }}</h3>
    </div>

    <div class="panel__controls">
      <NuxtLink to="/">Back</NuxtLink>

      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "#imports";

definePageMeta({ middleware: ["require-auth"] });

const logout = async () => {
  await Auth.logout();
};
</script>