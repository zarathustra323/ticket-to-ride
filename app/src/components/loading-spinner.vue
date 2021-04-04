<template>
  <svg
    v-show="show"
    :class="classes"
    fill="none"
    viewBox="0 0 24 24"
    title="Loading..."
    aria-label="Loading..."
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    />
    <!-- eslint-disable-next-line -->
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: 'gray-600',
      validator: (color) => ['blue-700', 'white', 'gray-600', 'gray-900'].includes(color),
    },
    size: {
      type: Number,
      default: 5,
      validator: (size) => [4, 5, 6, 8, 10].includes(size),
    },
  },

  computed: {
    classes() {
      const { color, size } = this;
      const classes = ['animate-spin-fast'];
      if (color === 'blue-700') classes.push('text-blue-700');
      if (color === 'white') classes.push('text-white');
      if (color === 'gray-600') classes.push('text-gray-600');
      if (color === 'gray-900') classes.push('text-gray-900');
      if (size === 4) classes.push('w-4', 'h-4');
      if (size === 5) classes.push('w-5', 'h-5');
      if (size === 6) classes.push('w-6', 'h-6');
      if (size === 8) classes.push('w-8', 'h-8');
      if (size === 10) classes.push('w-10', 'h-10');
      return classes;
    },
  },
};
</script>
