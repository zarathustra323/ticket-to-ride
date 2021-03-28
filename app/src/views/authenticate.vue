<template>
  <div class="p-4 max-w-sm space-y-6">
    <h1 class="text-lg font-medium">{{ title }}</h1>
    <div v-if="error">
      {{ error.message }}
      <go :to="{ name: 'user.login' }">
        Try signing in again
      </go>
    </div>
  </div>
</template>

<script>
import Go from '../components/link.vue';
import { LOGIN_USER_FROM_LINK } from '../graphql/mutations';
import GraphQLError from '../utils/graphql-error';
import tokenStorage from '../services/token-storage';

export default {
  components: {
    Go,
  },

  data: () => ({
    error: null,
  }),

  computed: {
    token() {
      return this.$route.query.token;
    },

    /**
     * Determines where to redirect the user to.
     */
    next() {
      return this.$route.query.next || '/games';
    },

    title() {
      if (this.error) return 'Oops';
      return 'Authenticating...';
    },
  },

  created() {
    this.login();
  },

  methods: {
    async login() {
      try {
        this.error = null;
        const { token, next } = this;
        if (!token) throw new Error('No login token was provided.');
        const input = { loginToken: token };
        const variables = { input };
        const { data } = await this.$apollo.mutate({ mutation: LOGIN_USER_FROM_LINK, variables });
        tokenStorage.set(data.loginUserFromLink.authToken);
        if (/^http/.test(next)) {
          window.location = next;
        } else {
          this.$router.replace(next);
        }
      } catch (e) {
        this.error = new GraphQLError(e);
      }
    },
  },
};
</script>
