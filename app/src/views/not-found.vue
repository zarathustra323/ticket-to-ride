<template>
  <div>
    <h1>
      404
    </h1>
    <p>
      The requested page could not be found
      <router-link to="/" class="block mt-3">Return home</router-link>
    </p>
  </div>
</template>

<script>
export default {
  head: {
    title: { inner: 'Not Found' },
  },
};
</script>
