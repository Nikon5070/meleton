<template>
  <div
    v-if="getList && getList.length"
    class="cart-sort"
  >
    <div class="title">
      Сортировать по:
    </div>
    <CartSortItem
      v-for="(item, i) in getList"
      :key="i"
      v-bind="item"
      @click="() => handleChange(item)"
      :is-active="isActive(item)"
    />
  </div>
</template>

<script>
import CartSortItem from '@/components/cart/CartSortItem';

export default {
  name: 'CartSort',
  components: {
    CartSortItem,
  },
  props: {
    list: {
      type: Array,
      default: () => ([]),
    },
    active: {
      type: Object,
      default: () => ({
        code: '',
        value: '',
      }),
    },
  },

  computed: {
    getList() {
      return (this.list
        && this.list.length
        && this.list.filter(({ name }) => name)) || [];
    },
  },

  methods: {
    handleChange(item) {
      this.$store.commit('cart/CHANGE_SORT', item);
    },
    isActive({ code, value }) {
      return code === this.active.code && value === this.active.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-sort {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  font-size: 16px;

  .title {
    margin-right: 8px;
  }
}

</style>
