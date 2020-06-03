<template>
  <div
    class="cart-add-item"
  >
    <button
      type="button"
      @click.prevent="handleClick"
    >
      Добавить товар
    </button>
    <CartItem
      v-if="isAdd"
      :id="new Date()"
      :is-edit-mode="true"
      @change="handleAddItem"
      @delete="handleRemoveItem"
    />
  </div>
</template>

<script>
import CartItem from '@/components/cart/CartItem';

export default {
  name: 'CartAddItem',
  components: {
    CartItem,
  },

  data() {
    return {
      isAdd: false,
    };
  },

  methods: {
    handleClick() {
      this.isAdd = true;
    },
    handleAddItem(item) {
      this.$emit('add', item);
      this.isAdd = false;
    },
    handleRemoveItem() {
      this.isAdd = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-sort {

}

</style>
