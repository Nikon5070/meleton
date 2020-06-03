<template>
  <div class="detail">
    <div class="container">
      <h1 class="title">
        {{ detail.name }}
      </h1>
      <div
        v-if="detail.price"
        class="price"
      >
        Цена: {{ detail.price }}
      </div>
      <div
        v-if="detail.date"
        class="date"
      >
        Дата: {{ detail.date }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailPage',

  middleware: ['detail'],

  computed: {
    detail() {
      return this.$store.getters['cart/getItemById'](this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped>


</style>
