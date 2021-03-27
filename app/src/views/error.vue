<template>
  <div>
    <h1>
      Oops...
    </h1>
    <h2>
      {{ error.message }}
    </h2>
    <router-link to="/" class="block mt-3">Return home</router-link>
  </div>
</template>

<script>
export default {
  head: {
    title: { inner: 'Not Found' },
  },

  props: {
    error: {
      type: Error,
      default: () => new Error('An unknown, fatal error occurred.'),
    },
  },
};
</script>
