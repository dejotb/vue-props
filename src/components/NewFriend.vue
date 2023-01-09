<template>
  <form ref="form">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="newFriend.name" />
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" v-model="newFriend.phone" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="newFriend.email" />
    </div>
    <button type="submit" @click.prevent="addFriend">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newFriend: {
        id: "",
        name: "",
        phone: "",
        email: "",
        isFavorite: false,
      },
    };
  },

  methods: {
    addFriend() {
      this.newFriend.id = this.newFriend.name;
      this.$emit("add-friend", this.newFriend);
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  justify-items: center;
}
</style>
