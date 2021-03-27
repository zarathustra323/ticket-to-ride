<template>
  <div>
    <h1>
      Register as a new user
    </h1>
    <h2>
      Or
      <router-link :to="{ name: 'user.login', query: { next: redirectTo } }">
        sign in to your account
      </router-link>
    </h2>
  </div>
</template>

<script>

export default {
  components: {},

  head: {
    title: { inner: 'Register' },
  },

  computed: {
    redirectTo() {
      return this.$route.query.next;
    },
  },
};
</script>
