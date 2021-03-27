<template>
  <div>
    <h1>
      Sign in to your account
    </h1>
    <h2>
      Or
      <go :to="{ name: 'user.register', query: { next: redirectTo } }">
        register as a new user
      </go>
    </h2>
  </div>
</template>

<script>
import Go from '../../components/link.vue';

export default {
  components: {
    Go,
  },

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
