<template>
  <label class="app-input">
    <span>{{ label }}</span>
    <input type="text" />
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Default",
    },
  },
};
</script>

<style>
.app-input {
  display: flex;
  flex-direction: column;
}
</style>
