<template>
  <form class="app-card" @submit.prevent>
    <app-input label="First Name" v-model:value.trim="firstName"></app-input>
    <app-input label="Last Name" v-model:value.trim="lastName"></app-input>
    <app-input label="Email" v-model:value.trim="email"></app-input>
    <app-input label="Message" v-model:value.trim="msg" textArea></app-input>
    <app-btn @click="validateForm">SEND</app-btn>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      msg: null,
    };
  },
  // id prop router.params
  props: ["id"],
  methods: {
    validateForm() {
      if (this.emailCheck && this.strCheck) {
        this.sendMsg();
      } else {
        alert("Inputs are Invalid");
      }
    },
    sendMsg() {
      const wholeMsg = {};
      wholeMsg.coachId = this.id;
      wholeMsg.name = `${this.lastName}, ${this.firstName}`;
      wholeMsg.email = this.email;
      wholeMsg.msg = this.msg;
      // console.log(wholeMsg); //! TEST

      this.$store.dispatch("requests/addRequests", wholeMsg);
      this.$router.push(`/coaches/${this.id}`);
    },
  },
  computed: {
    emailCheck() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    },
    strCheck() {
      if (this.firstName && this.lastName) return true;
      if (this.msg) return true;
      return false;
    },
  },
};
</script>
