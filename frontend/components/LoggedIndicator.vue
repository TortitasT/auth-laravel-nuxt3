<template>
  <span
    class="logged-indicator text"
    :class="{ 'text--green': !!user, 'text--red': !!!user }"
  >
    {{ !!user ? "Logged in" : "Not logged in" }}
  </span>
</template>

<style lang="scss">
.logged-indicator {
  position: absolute;
  top: 1em;
  right: 1em;
}
</style>
