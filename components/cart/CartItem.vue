<template>
  <div
    v-click-outside="handleClickOutside"
    class="cart-item"
    :class="classBind"
  >
    <component
      :is="bindWrapper.is"
      v-bind="bindWrapper"
      class="wrapper"
    >
      <component
        :is="isComponent"
        ref="main"
        v-bind="$props"
      />
    </component>
    <div class="actions">
      <div
        v-if="!isEdit"
        class="edit"
        title="Редактирование"
        @click="handleEdit"
      />
      <div
        v-else
        class="accept"
        title="Применить"
        @click="handleAccept"
      />
      <div
        class="delete"
        :title="!isEdit ? 'Удалить' : 'Отменить'"
        @click="handleDelete"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    id: {
      type: [Number, String],
      default: '',
    },
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
      isEdit: false,
    };
  },

  computed: {
    isComponent() {
      return !this.isEdit
        ? () => import('@/components/cart/CartItemData')
        : () => import('@/components/cart/CartItemEdit');
    },
    classBind() {
      return {
        'is-edit': this.isEdit,
      };
    },

    bindWrapper() {
      const defaultComponent = {
        is: 'div',
      };

      if (!this.isEdit) {
        return {
          ...defaultComponent,
          is: 'nuxt-link',
          to: `/${this.id}`,
        };
      }

      return defaultComponent;
    },
  },

  methods: {
    handleEdit() {
      this.isEdit = true;
    },

    handleClickOutside() {
      this.isEdit = false;
    },

    handleAccept() {
      this.$emit('change', {
        id: this.id,
        ...this.$refs.main.getForm(),
      });

      this.isEdit = false;
    },

    handleDelete() {
      if (this.isEdit) {
        this.isEdit = false;
      } else {
        this.$emit('delete', this.id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  position: relative;
  padding: 32px;
  border: 1px solid;
  border-radius: 5px;

  &:hover{
    .actions {
      opacity: 1;
      visibility: visible;
    }
  }

  .wrapper {
    @include a-reset();
  }

  .actions {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
    top: 8px;
    right: 8px;
    display: flex;
    flex-direction: column;
  }

  .edit,
  .accept,
  .delete {
    width: 24px;
    height: 24px;
    border-radius: 5px;
    cursor: pointer;
  }

  .edit + .delete,
  .accept + .delete {
    margin-top: 8px;
  }

  .edit {
    background: yellow;
  }

  .accept {
    background: green;
  }

  .delete {
    background: red;
  }
}

.cart-item.is-edit{
  .actions {
    opacity: 1;
    visibility: visible;
  }
}

</style>
