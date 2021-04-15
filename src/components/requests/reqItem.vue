<template>
  <li class="request-item app-card">
    <h3 class="request-name">
      {{ name }}
    </h3>
    <span class="request-email">{{ email }}</span>

    <hr class="request-item-break" />

    <p class="request-detail-msg">{{ msg }}</p>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    email: String,
    msg: String,
  },
};
</script>

<style>
.request-item {
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: 0.2s ease-out;
}
.request-item:hover {
  transform: translateY(-3px);
}

.request-item-break {
  margin: 1.5rem 0 1rem 0;
  border: none;
  border-top: 2px solid;
}

.request-name {
  margin: 0 0 1rem 0;
  font-size: 2.6rem;
  line-height: 1.2;
}

.request-email {
  font-size: 1.4rem;
}

.request-detail-msg {
  font-size: 1.6rem;
}
</style>
