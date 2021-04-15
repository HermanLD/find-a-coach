<template>
  <div class="app-card">
    <app-input label="Email" v-model:value.trim="email"></app-input>
    <app-input label="password" v-model:value.trim="password"></app-input>
    <app-btn @onClick="logIn">Login</app-btn>
    <router-link to="/register">MAKE AN ACCOUNT</router-link>
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
  methods: {
    logIn() {
      const userPackage = {};
      userPackage.email = this.email;
      userPackage.password = this.password;

      this.$store.dispatch("login", userPackage);
    },
  },
};
</script>

<style></style>
