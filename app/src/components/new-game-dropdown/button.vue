<template>
  <button
    :class="classes"
    :aria-expanded="isOpen"
    :disabled="isLoading"
    type="button"
    id="create-new-game-menu"
    aria-haspopup="true"
    @click="$emit('click', $event)"
  >
    {{ label }}
    <chevron-down class="-mr-1 ml-2 h-5 w-5" />
  </button>
</template>

<script>
import ChevronDown from '../icons/chevron-down-sm.vue';

export default {
  components: {
    ChevronDown,
  },

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    classes: [
      'inline-flex',
      'justify-center',
      'w-full',
      'rounded-md',
      'border',
      'border-gray-300',
      'shadow-sm',
      'px-4',
      'py-2',
      'bg-white',
      'text-sm',
      'font-medium',
      'text-gray-700',
      'hover:bg-gray-50',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'focus:ring-offset-gray-100',
      'focus:ring-blue-500',
    ],
  }),

  computed: {
    /**
     * @todo replace with loading spinner (that doesn't change the btn width)
     */
    label() {
      if (this.isLoading) return 'Loading...';
      return 'New Game';
    },
  },
};
</script>
