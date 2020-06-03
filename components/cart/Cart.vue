<template>
  <div
    class="cart"
  >
    <CartItem
      v-for="item in getList"
      :key="item.id"
      class="item"
      v-bind="item"
      @change="handleChange"
      @delete="handleDelete"
    />
  </div>
</template>

<script>
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
      return this.list
        && this.list.length
        && this.list.filter(({ name }) => name);
    },
  },

  methods: {
    handleChange(item) {
      this.$store.commit('cart/CHANGE_ITEM', item);
    },
    handleDelete(id) {
      this.$store.commit('cart/DELETE_ITEM', id);
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
