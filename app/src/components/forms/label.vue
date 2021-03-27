<template>
  <label :class="classes">
    <slot />
  </label>
</template>

<script>
export default {
  data: () => ({
    classes: [
      'block',
      'text-sm',
      'font-medium',
      'text-gray-700',
    ],
  }),
};
</script>
