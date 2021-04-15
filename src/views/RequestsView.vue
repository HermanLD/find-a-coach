<template>
  <section>
    <ul>
      <request-li
        v-for="request in requests"
        :key="request.msgId"
        :id="request.msgId"
        :name="request.name"
        :email="request.email"
        :msg="request.msg"
      ></request-li>
    </ul>
  </section>
</template>

<script>
import RequestItem from "../components/requests/reqItem";
export default {
  components: {
    "request-li": RequestItem,
  },
  computed: {
    requests() {
      return this.$store.getters["requests/allRequests"];
    },
  },
  created() {
    this.$store.dispatch("requests/loadRequests");
  },
};
</script>
