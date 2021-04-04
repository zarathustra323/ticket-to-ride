<template>
  <select
    :class="classes"
    @change="$emit('change', $event.target.value)"
  >
    <slot />
  </select>
</template>

<script>
export default {
  data: () => ({
    classes: [
      'block',
      'w-full',
      'pl-3',
      'pr-10',
      'py-2',
      'text-base',
      'border-gray-300',
      'focus:outline-none',
      'focus:ring-blue-500',
      'focus:border-blue-500',
      'sm:text-sm',
      'rounded-md',
    ],
  }),
};
</script>
