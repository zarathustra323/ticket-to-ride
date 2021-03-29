<template>
  <router-link
    :to="to"
    :class="classes"
    role="menuitem"
    @click.native="$emit('click', $event)"
  >
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
  data: () => ({
    classes: [
      'block',
      'px-4',
      'py-2',
      'text-sm',
      'text-gray-700',
      'hover:bg-gray-100',
      'hover:text-gray-900',
    ],
  }),
};
</script>
