<template>
  <ul class="coach-detail-specialties">
    <li class="coach-detail-skill" v-for="(area, index) in areas" :key="index">
      {{ area }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    areas: Array,
  },
};
</script>

<style>
.coach-detail-specialties {
  /* font size stays 1rem */
  display: flex;
  margin-bottom: 0.6rem;
  letter-spacing: 0.2rem;
}

.coach-detail-skill {
  display: inline-block;
  padding: 0.8rem 0.4rem;
  background-color: var(--clr-purp);
  color: var(--clr-white);
  line-height: 0;
}
</style>
