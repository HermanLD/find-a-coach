<template>
  <div class="app-card">
    <app-input label="First Name" v-model:value="firstName"></app-input>
    <app-input label="Last Name" v-model:value="lastName"></app-input>
    <app-input label="Email" v-model:value="email"></app-input>
    <app-input label="Password" v-model:value="password"></app-input>
    <div class="register-input-areas">
      <span>Areas:</span>
      <label class="register-input-area">
        Frontend
        <input type="checkbox" value="frontend" v-model="areas" /> </label
      ><label class="register-input-area">
        Backend
        <input type="checkbox" value="backend" v-model="areas" /> </label
      ><label class="register-input-area">
        Career
        <input type="checkbox" value="career" v-model="areas" />
      </label>
    </div>
    <app-input label="Rate" v-model:value="rate"></app-input>
    <app-input
      label="Description"
      textArea
      v-model:value="description"
    ></app-input>

    <app-btn @onClick="validateCoach">REGISTER</app-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      rate: null,
      areas: [],
      description: null,
    };
  },
  methods: {
    validateCoach() {
      if (this.formCheck) {
        this.registerCoach();
      } else {
        alert("INPUTS NOT VALID");
      }
    },
    registerCoach() {
      const newCoach = {};
      newCoach.firstName = this.firstName;
      newCoach.lastName = this.lastName;
      newCoach.email = this.email;
      newCoach.password = this.password;
      newCoach.description = this.description;
      // make sure rate is an integer
      newCoach.rate = parseInt(this.rate, 10);
      newCoach.areas = this.areas;

      // console.log(newCoach);
      this.$store.dispatch("coaches/addCoach", newCoach);
      this.$router.push("/coaches");
    },
  },
  computed: {
    emailCheck() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    },
    formCheck() {
      if (!this.firstName || !this.lastName) {
        console.log("empty:", this.firstname);
        return false;
      }
      if (!this.description) {
        console.log("empty:", this.description);
        return false;
      }
      if (!this.password) {
        console.log("empty:", this.password);
        return false;
      }
      if (!this.emailCheck) {
        console.log(" email empty:", this.emailCheck);
        return false;
      }
      if (!this.rate) {
        console.log("empty:", this.rate);
        return false;
      }
      return true;

      // if (!this.firstName || !this.lastName) return false;
      // if (!this.description) return false;
      // if (!this.password) return false;
      // if (!this.emailCheck) return false;
      // if (!this.rate) return false;
      // return true;
    },
  },
};
</script>

<style>
.register-input-areas {
  margin: 1rem 0;
}

.register-input-areas > *:not(:first-child) {
  margin-left: 0.8rem;
}
</style>
