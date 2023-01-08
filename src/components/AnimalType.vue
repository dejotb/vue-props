<template>
  <li>
    <h2>Hello</h2>
    <p>{{ animalName }}</p>
    <p>{{ animalType }}</p>
    <button @click="toggleActive">
      {{ isActive ? "Active" : "Not Active" }}
    </button>
  </li>
</template>
<script>
export default {
  props: ["animalName", "animalType", "isActive", "id"],
  methods: {
    toggleActive() {
      this.$emit("change-active-status", this.id);
    },
  },
};
</script>
