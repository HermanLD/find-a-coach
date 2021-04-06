<template>
  <div class="app-card">
    <app-input label="firstName"></app-input>
    <app-input label="lastName"></app-input>
    <app-input label="email"></app-input>
    <app-input label="password"></app-input>
    <app-input label="rate"></app-input>

    <!-- LABEL AREAS -->
    <app-select></app-select>

    <app-btn>REGISTER</app-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rate: "",
      areas: [],
    };
  },
};
</script>
