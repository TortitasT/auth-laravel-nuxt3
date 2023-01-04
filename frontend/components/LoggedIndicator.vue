<template>
  <span
    class="logged-indicator text"
    :class="{ 'text--green': loggedIn, 'text--red': !loggedIn }"
  >
    {{ loggedIn ? "Logged in" : "Not logged in" }}
  </span>
</template>

<style lang="scss">
.logged-indicator {
  position: absolute;
  top: 1em;
  right: 1em;
}
</style>
