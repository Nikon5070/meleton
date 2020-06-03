<template>
  <div
    v-if="getList && getList.length"
    class="cart"
  >
    <div class="list">
      <CartItem
        v-for="item in getListByPage"
        :key="item.id"
        class="item"
        v-bind="item"
        @change="handleChange"
        @delete="handleDelete"
      />
    </div>
    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :current-page="page"
      :page-size="limit"
      :total="getList.length"
      @current-change="handleChangePage"
    />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapState } from 'vuex';

import CartItem from '@/components/cart/CartItem';

export default {
  name: 'Cart',
  components: { CartItem },
  props: {
    list: {
      type: Array,
      default: () => ([]),
    },
  },

  computed: {
    getList() {
      return (this.list
        && this.list.length
        && this.list.filter(({ name }) => name)) || [];
    },

    getListByPage() {
      return this.$store.getters['cart/getListByPage']({
        list: this.getList,
        page: this.page,
        limit: this.limit,
      });
    },

    ...mapState({
      limit: (state) => state.cart.limit,
      page: (state) => state.cart.page,
    }),
  },

  watch: {
    getListByPage(value) {
      if (!value.length) {
        this.handleChangePage(this.page - 1);
      }
    },
  },

  methods: {
    handleChange(item) {
      this.$store.commit('cart/CHANGE_ITEM', item);
    },
    handleDelete(id) {
      this.$store.commit('cart/DELETE_ITEM', id);
    },
    handleChangePage(page = 1) {
      this.$store.commit('cart/SET_PAGE', page);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {

  .item {
    &:not(first-child) {
      margin-top: 20px;
    }
  }

}

</style>
