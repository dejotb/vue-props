<template>
  <form>
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div><button @click.prevent="submitData">Add contact</button></div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },

  emits: ["add-contact"],

  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );

      //   const newContact = {
      //     id: this.$refs.name.value,
      //     name: this.$refs.name.value,
      //     phone: this.$refs.phone.value,
      //     email: this.$refs.email.value,
      //     isFavourite: false,
      //   };

      //   this.friends.push(newContact);
      //   console.log("contact added");
      //   console.log(this.$refs.name.value);
    },
  },
};
</script>
