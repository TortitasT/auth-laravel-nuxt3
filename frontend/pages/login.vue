<template>
  <div>
    <form @submit.prevent="login">
      <h2>Login</h2>

      <input type="text" name="email">
      <input type="text" name="password">

      <button type="submit">Submit</button>
    </form>

    <p>
      {{ useAuthStore().user }}
    </p>

    <NuxtLink to="/">Back</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth'

const login = async (event: Event) => {
  const formData = new FormData(event.target as HTMLFormElement)
  const email = formData.get('email')?.toString() || ''
  const password = formData.get('password')?.toString() || ''

  const test = await auth.login({
    email,
    password
  })
}
</script>

