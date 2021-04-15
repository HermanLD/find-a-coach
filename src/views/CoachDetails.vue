<template>
  <section>
    <div class="app-card">
      <h2>{{ selectedCoach.firstName }} {{ selectedCoach.lastName }}</h2>
      <span>$ {{ selectedCoach.hourlyRate }} / Hour</span>

      <!-- Add array of areas -->
      <coach-areas :areas="selectedCoach.areas"></coach-areas>

      <p class="coach-detail-description">{{ selectedCoach.description }}</p>

      <div class="coach-detail-cta">
        <h3>Interested in connecting? Send a message</h3>
        <router-link :to="contactPath">CONTACT</router-link>
        <!-- <app-btn @onClick="toContact">CONTACT</app-btn> -->
      </div>
    </div>
  </section>
</template>

<script>
import CoachAreas from "../components/coach/CoachAreas";

export default {
  data() {
    return {
      selectedCoach: {},
    };
  },
  components: {
    "coach-areas": CoachAreas,
  },
  methods: {
    // toContact() {
    //   // console.log(this.id);
    //   this.$route.path;
    // },
    selectCoach() {
      //? loop through array of coaches
      //? grab coach w/ param.id
      for (let i = 0; i < this.coachArr.length; i++) {
        let currCoach = this.coachArr[i];
        if (currCoach.id === this.id) {
          this.selectedCoach = currCoach;
        }
      }
    },
  },
  computed: {
    coachArr() {
      return this.$store.getters["coaches/allCoaches"];
    },
    id() {
      return this.$route.params.id;
    },
    contactPath() {
      return `${this.$route.path}/contact`;
    },
  },
  created() {
    this.selectCoach();
  },
};
</script>

<style>
.coach-detail-description {
  font-size: 1.6rem;
}
</style>
