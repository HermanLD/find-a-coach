<template>
  <nav class="app-nav">
    <app-select></app-select>

    <div>
      <app-btn class="nav-btn">COACHES</app-btn>
      <app-btn @onClick="login" v-if="!isLoggedIn">SIGNIN</app-btn>
      <app-btn @onClick="login" v-if="isLoggedIn">SIGNOUT</app-btn>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    login: Function,
    isLoggedIn: Boolean,
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
  background-color: var(--clr-white);
}
.nav-btn {
  margin-right: 0.5rem;
}
</style>
