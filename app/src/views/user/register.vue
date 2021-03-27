<template>
  <div>
    <h1>
      Register as a new user
    </h1>
    <h2>
      Or
      <go :to="{ name: 'user.login', query: { next: redirectTo } }">
        sign in to your account
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
    title: { inner: 'Register' },
  },

  computed: {
    redirectTo() {
      return this.$route.query.next;
    },
  },
};
</script>
