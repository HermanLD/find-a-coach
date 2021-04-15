<template>
  <nav class="app-nav app-card">
    <!-- <app-select></app-select> -->
    <div>
      <app-btn @onClick="toCoaches" class="nav-btn">COACHES</app-btn>
      <app-btn @onClick="logout">SIGNOUT</app-btn>
      <app-btn @onClick="login">SIGNIN</app-btn>
      <!-- <app-btn @onClick="logout" v-if="isLoggedIn">SIGNOUT</app-btn>
      <app-btn @onClick="login" v-else>SIGNIN</app-btn> -->
    </div>

    <app-btn v-if="isLoggedIn">REQUESTS</app-btn>
  </nav>
</template>

<script>
export default {
  props: {
    login: Function,
    logout: Function,
    isLoggedIn: Boolean,
  },
  methods: {
    toCoaches() {
      this.$router.push("/coaches");
    },
  },
};
</script>

<style>
.app-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;
  border-radius: var(--bor-radius);
  padding: 1rem 1rem;
}
.nav-btn {
  margin-right: 0.5rem;
}
</style>
