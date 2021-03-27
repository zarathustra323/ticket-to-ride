<template>
  <input
    :class="classes"
    :value="value"
    @input="$emit('input', $event.target.value)"
    @change="$emit('change', $event.target.value)"
    @focus="$emit('focus', $event)"
  >
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
  },

  data: () => ({
    classes: [
      'shadow-sm',
      'focus:ring-blue-500',
      'focus:border-blue-500',
      'block',
      'w-full',
      'sm:text-sm',
      'border-gray-300',
      'rounded-md',
    ],
  }),
};
</script>
