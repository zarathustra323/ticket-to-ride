<template>
  <div
    :class="classes"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="create-new-game-menu"
  >
    <div class="py-1" role="none">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    classes: [
      'origin-top-left',
      'absolute',
      'left-0',
      'mt-2',
      'w-56',
      'rounded-md',
      'shadow-lg',
      'bg-white',
      'ring-1',
      'ring-black',
      'ring-opacity-5',
      'focus:outline-none',
    ],
  }),
};
</script>
