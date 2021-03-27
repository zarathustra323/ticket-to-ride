<template>
  <div>
    <h1>
      Sign in to your account
    </h1>
    <h2>
      Or
      <router-link :to="{ name: 'user.register', query: { next: redirectTo } }">
        register as a new user
      </router-link>
    </h2>
  </div>
</template>

<script>

export default {
  components: {},

  head: {
    title: { inner: 'Sign In' },
  },

  computed: {
    redirectTo() {
      return this.$route.query.next;
    },
  },
};
</script>
