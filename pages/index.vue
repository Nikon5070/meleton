<template>
  <div class="index-page">
    <div class="container">
      <CartTop
        :sort="sort"
      />
      <Cart
        v-if="list && list.length"
        :list="list"
      />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapState, mapGetters } from 'vuex';

import CART_SORT from '@/json/cartSort.json';

const Cart = () => import('@/components/cart/Cart');
const CartTop = () => import('@/components/cart/CartTop');

export default {
  name: 'MainPage',

  components: {
    CartTop,
    Cart,
  },

  computed: {
    ...mapState({
      activeSort: (state) => state.cart.sort,
    }),
    ...mapGetters({
      list: 'cart/getList',
    }),

    sort() {
      return {
        list: CART_SORT,
        active: this.activeSort,
      };
    },
  },
};
</script>

<style lang="scss" scoped>


</style>
