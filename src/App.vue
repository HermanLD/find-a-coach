<template>
  <h1 class="app-header">FIND-A-COACH</h1>

  <app-nav :login="login" :logout="logout" :isLoggedIn="isLoggedIn"></app-nav>

  <!-- Leads to CoachesList first -->

  <router-view> </router-view>

  <teleport to="body">
    <app-loader v-if="requestIsLoading || coachesIsLoading"></app-loader>
  </teleport>
</template>

<script>
import AppNav from "./components/layout/AppNav";
import { mapGetters } from "vuex";

export default {
  components: {
    "app-nav": AppNav,
  },
  methods: {
    login() {
      this.$router.push("/signin");
    },
    logout() {
      this.$store.dispatch("logOut");
    },
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
      requestIsLoading: "requests/isLoading",
      coachesIsLoading: "coaches/isLoading",
    }),
  },
  created() {
    this.$store.dispatch("coaches/fetchCoaches");
    this.$store.dispatch("autoLogin");
  },
};
</script>

<style>
#app {
  /* Position & Display */
  /* Dimentions & Spacing */
  /* Appearence */
  /* Font & Text */
  /* Animations & Transitions */
  /* other (overflow, opacity, ...etc) */
  margin: 2.5rem auto;
}

.app-header {
  font-size: 3.2rem;
  line-height: 4rem;
  text-align: center;
  color: #ffffff;
}

.app-card {
  padding: 2rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: var(--bor-radius);
  background-color: var(--clr-white);
}
</style>
