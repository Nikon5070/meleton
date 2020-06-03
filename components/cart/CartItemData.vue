<template>
  <div
    class="cart-item-data"
  >
    <div
      class="name"
      v-html="name"
    />
    <div
      class="price"
      v-html="price"
    />
    <div
      class="date"
      v-html="date"
    />
  </div>
</template>

<script>
export default {
  name: 'CartItemData',
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
};
</script>

<style lang="scss" scoped>
.cart-item-data {
  color: $black;
}

</style>
