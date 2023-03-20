<template>
  <span
    class="logged-indicator text"
    :class="{ 'text--green': isUserLoggedIn, 'text--red': !isUserLoggedIn }"
  >
    {{ !!isUserLoggedIn ? "Logged in" : "Not logged in" }}
  </span>
</template>

<script setup>

const isUserLoggedIn = computed(() => !!useAuthStore().user);

</script>

<style lang="scss">
.logged-indicator {
  position: absolute;
  top: 1em;
  right: 1em;
}
</style>
