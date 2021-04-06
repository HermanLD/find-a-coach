<template>
  <div class="app-card">
    <app-input label="Email"></app-input>
    <app-input label="password"></app-input>
    <app-btn>Login</app-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style></style>
