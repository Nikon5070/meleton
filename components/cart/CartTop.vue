<template>
  <div
    class="cart-top"
  >
    <h1 class="title">
      Список
    </h1>
    <CartSort
      v-bind="sort"
    />
    <CartAddItem
      @add="handleAddItem"
    />
  </div>
</template>

<script>
import CartSort from '@/components/cart/CartSort';
import CartAddItem from '@/components/cart/CartAddItem';

export default {
  name: 'CartTop',
  components: {
    CartAddItem,
    CartSort,
  },
  props: {
    sort: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    handleAddItem(item) {
      this.$store.commit('cart/ADD_ITEM', item);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-sort {

}

</style>
