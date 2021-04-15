<template>
  <button class="app-btn" @click="handleClick">
    <slot>Default</slot>
  </button>
</template>

<script>
export default {
  emits: ["onClick"],
  methods: {
    handleClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style>
.app-btn {
  padding: 0.5rem 1.5rem;
  border: none;
  background-color: var(--clr-purp);
  color: #ffffff;
}

.app-btn:hover,
.app-btn:focus {
  background-color: var(--clr-black);
}
</style>
