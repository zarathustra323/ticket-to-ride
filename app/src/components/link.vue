<template>
  <router-link :class="classes" :to="to">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
  },

  computed: {
    classes() {
      const classes = ['underline', 'hover:text-blue-700'];
      return classes;
    },
  },
};
</script>
