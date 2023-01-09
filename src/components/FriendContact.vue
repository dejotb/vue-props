<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(favorite)" : null }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="removeFriend">Remove</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: { type: String, required: true },
    name: {
      type: String,
      required: true,
    },

    phoneNumber: String,
    emailAddress: String,
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  emits: ["toggle-favorite", "remove-friend"],

  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    removeFriend() {
      this.$emit("remove-friend", this.id);
    },
  },
};
</script>
