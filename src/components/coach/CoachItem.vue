<template>
  <li class="coach-item app-card">
    <h3 class="coach-name">
      {{ firstName }}
      <span class="coach-name-last">
        {{ lastName }}
      </span>
    </h3>

    <coach-areas :areas="specialties"></coach-areas>

    <hr class="coach-item-break" />
    <div class="coach-cta-section">
      <span class="coach-rate"
        >Rate: <span class="coach-rate-value">{{ hourlyRate }}</span></span
      >
    </div>
  </li>
</template>

<script>
import CoachAreas from "./CoachAreas";

export default {
  props: {
    id: String,
    firstName: String,
    lastName: String,
    description: String,
    hourlyRate: Number,
    specialties: Array,
  },
  components: {
    "coach-areas": CoachAreas,
  },
};
</script>

<style>
.coach-item {
  background-color: var(--clr-white);
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: 0.2s ease-out;
}
.coach-item:hover {
  transform: translateY(-3px);
}

.coach-item-break {
  margin: 1.5rem 0 1rem 0;
  border: none;
  border-top: 2px solid;
}

.coach-name {
  margin: 0 0 1rem 0;
  font-size: 2.6rem;
  line-height: 1.2;
}

.coach-name-last {
  display: block;
  font-size: 2rem;
  font-weight: var(--fw-bold);
}

.coach-cta-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.coach-rate {
  font-size: 1.4rem;
}

.coach-rate-value {
  margin-left: 1rem;
  font-size: 2.4rem;
  color: var(--clr-danger-1);
}
</style>
