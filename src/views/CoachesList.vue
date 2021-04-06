<template>
  <section>
    <ul>
      <coach-li
        v-for="coach in coaches"
        :key="coach.id"
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :specialties="coach.areas"
        :description="coach.description"
        :hourlyRate="coach.hourlyRate"
      ></coach-li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import CoachItem from "../components/coach/CoachItem";

export default {
  components: {
    "coach-li": CoachItem,
  },
  computed: {
    ...mapGetters({
      coaches: "coaches/allCoaches",
    }),
  },
};
</script>

<style></style>
