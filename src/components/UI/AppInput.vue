<template>
  <label class="app-input">
    <span>{{ label }}</span>
    <textarea v-if="textArea" @input="onInput($event)" />
    <input v-else type="text" @input="onInput($event)" />
  </label>
</template>

<script>
export default {
  emits: ["update:value"],
  props: {
    label: {
      type: String,
      default: "Default",
    },
    textArea: Boolean,
  },
  methods: {
    onInput(event) {
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>

<style>
.app-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}
</style>
