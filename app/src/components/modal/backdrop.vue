<template>
  <transition
    enter-active-class="ease-out duration-300"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="ease-in duration-200"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="show"
      :class="classes"
      aria-hidden="true"
      @click.stop="$emit('click', $event)"
    />
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    classes: [
      'fixed',
      'inset-0',
      'bg-gray-900',
      'bg-opacity-50',
      'transition-opacity',
    ],
  }),
};
</script>
