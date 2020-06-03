<template>
  <div
    class="cart-item-edit"
  >
    <input
      v-model="form.name"
      type="text"
      class="name"
    >
    <input
      v-model="form.price"
      type="number"
      class="price"
    >
    <input
      v-model="form.date"
      type="date"
      class="date"
    >
  </div>
</template>

<script>
export default {
  name: 'CartItemEdit',
  props: {
    name: {
      type: String,
      default: '',
    },
    price: {
      type: [Number, String],
      default: '',
    },
    date: {
      type: [Number, String],
      default: '',
    },
  },

  data() {
    return {
      form: {
        name: this.name,
        price: this.price,
        date: this.date,
      },
    };
  },

  methods: {
    handleEdit() {
      this.isEdit = true;
    },
    handleClickOutside() {
      this.isEdit = false;
    },
    getForm() {
      return { ...this.form };
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-item-edit {

  input {
    display: block;
  }
}

</style>
