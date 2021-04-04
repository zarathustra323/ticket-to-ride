<template>
  <button
    type="button"
    :class="classes"
    @click="$emit('click', $event)"
  >
    <close-icon class="w-5 h-5" />
  </button>
</template>

<script>
import CloseIcon from '../icons/x-sm.vue';

export default {
  components: {
    CloseIcon,
  },

  data: () => ({
    classes: [
      'p-1',
      'text-gray-800',
      'rounded-full',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-1',
      'focus:ring-blue-500',
      'hover:bg-gray-200',
    ],
  }),
};
</script>
