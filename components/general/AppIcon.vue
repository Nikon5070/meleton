<template>
  <svg-icon
    class="app-icon"
    :name="name"
    :fill="fill"
    :stroke="stroke"
  />
</template>

<script>
export default {
  name: 'AppIcon',

  props: {
    name: {
      type: String,
      default: '',
    },
    fill: {
      type: String,
      default: '',
    },
    stroke: {
      type: String,
      default: '',
    },
  },
};
</script>
