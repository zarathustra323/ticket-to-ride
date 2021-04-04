<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: [
      'inline-block',
      'align-bottom',
      'bg-white',
      'rounded-lg',
      'text-left',
      'overflow-hidden',
      'shadow-xl',
      'transform',
      'transition-all',
      'sm:max-w-lg',
      'lg:my-8',
      'lg:align-middle',
      'lg:max-w-5xl',
      'lg:w-full',
    ],
  }),
};
</script>
