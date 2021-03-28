<template>
  <button :class="classes" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script>
export default {
  data: () => ({
    classes: [
      'inline-flex',
      'items-center',
      'px-4',
      'py-2',
      'border',
      'border-gray-300',
      'shadow-sm',
      'text-sm',
      'font-medium',
      'rounded-md',
      'text-gray-700',
      'bg-white',
      'hover:bg-gray-50',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'focus:ring-blue-500',
    ],
  }),
};
</script>
