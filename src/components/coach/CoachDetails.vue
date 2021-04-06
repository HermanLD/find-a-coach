<template>
  <section>
    <div class="app-card">
      <h2>NAME</h2>
      <span>$ 30 / Hour</span>

      <!-- Add array of areas -->
      <coach-areas></coach-areas>

      <p class="coach-detail-description">DESCRIPTION</p>

      <div class="coach-detail-cta">
        <h3>Interested in connecting? Send a message</h3>
        <app-button>CONTACT</app-button>
      </div>
    </div>
  </section>
</template>
<style>
.coach-detail-description {
  font-size: 1.6rem;
}
</style>
