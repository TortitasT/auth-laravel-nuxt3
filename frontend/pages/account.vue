<template>
  <div>
    <pre>
      {{ useAuthStore().user }}
    </pre>

    <button @click="logout">Logout</button>

    <NuxtLink to="/">Back</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '#imports'

definePageMeta({ middleware: ["middleware-auth"] })

const logout = async () => {
  await auth.logout()
}
</script>