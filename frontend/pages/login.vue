<template>
  <form class="panel" @submit.prevent="login">
    <header>
      <h1>Login</h1>
    </header>

    <div class="panel__content">
      <InputField type="text" label="Email" name="email" id-override="email" />
      <InputField
        type="password"
        label="Password"
        name="password"
        id-override="password"
      />
    </div>

    <div class="panel__controls">
      <NuxtLink class="button" to="/">Back</NuxtLink>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script setup lang="ts">
const login = async (event: Event) => {
  const formData = new FormData(event.target as HTMLFormElement);
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const test = await useAuth().login({
    email,
    password,
  });
};
</script>

