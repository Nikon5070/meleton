<template>
  <div
    class="cart-sort-item"
    :class="classBind"
    v-on="listeners"
  >
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'CartSortItem',

  props: {
    code: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    listeners() {
      return this.$listeners;
    },

    classBind() {
      return {
        'is-active': this.isActive,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-sort-item {
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 5px;
  border: 1px solid transparent;
  font-size: 16px;
  transition: border .3s;

  &.is-active {
    border-color: #0C0D0F;
  }
}

</style>
