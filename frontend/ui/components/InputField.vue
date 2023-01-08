<template>
  <div class="input-field" v-bind="{}">
    <input
      v-bind="$attrs"
      v-on="listeners"
      :id="idOverride"
      :placeholder="label"
    />
    <label>{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    idOverride: {
      type: String,
      default: null,
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$attrs,
        input: (event) => {
          this.$emit("update:modelValue", event.target.value);
        },
      };
    },
  },
};
</script>

<style lang="scss">
.input-field {
  position: relative;

  & > input {
    width: 100%;
    box-sizing: border-box;

    padding: 1em 0.5em 1em 0.5em;

    transition: 0.2s all ease-in-out;

    font-size: 1em;

    & + label {
      font-weight: bold;

      opacity: 0;

      font-size: 0.8em;

      position: absolute;
      top: 1.2em;
      left: 0.8em;
      transform: translateY(0);
      transition: 0.2s transform, 0.2s opacity;
    }

    &:not(:placeholder-shown) {
      padding: 1.5em 0.5em 0.5em 0.5em;

      & + label {
        opacity: 0.5;

        transform: translateY(-0.5em);
      }
    }
  }
}
</style>