<template>
  <div class="index-page">
    <div class="container">
      <h1 class="title">
        Список
      </h1>
      <CartSort
        :list="sort"
        :active="activeSort"
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
const CartSort = () => import('@/components/cart/CartSort');

export default {
  name: 'MainPage',

  components: {
    CartSort,
    Cart,
  },

  data() {
    return {
      sort: CART_SORT,
    };
  },

  computed: {
    ...mapState({
      activeSort: (state) => state.cart.sort,
    }),
    ...mapGetters({
      list: 'cart/getList',
    }),
  },
};
</script>

<style lang="scss" scoped>


</style>
