<template>
  <div class="p-4 max-w-sm space-y-6">
    <div>
      <h1 class="text-lg font-medium">Sign in to your account</h1>
      <h2 class="font-medium">
        Or
        <go :to="{ name: 'user.register', query: { next: redirectTo } }">
        register as a new user
      </go>
      </h2>
    </div>
    <login-link-sent v-if="sent" :email="email" />
    <form v-else class="space-y-4" @submit.prevent="login">
      <div>
        <input-label for="signin.email" class="ml-1 mb-1">Email Address</input-label>
        <input-field
          id="signin.email"
          v-model="email"
          type="email"
          autocomplete="email"
          :disabled="isLoading"
          required
        />
      </div>

      <btn type="submit" :disabled="isLoading">
        Send Link
      </btn>

      <alert v-if="error">
        {{ error.message }}
      </alert>
    </form>
  </div>
</template>

<script>
import Alert from '../../components/alert.vue';
import Btn from '../../components/forms/button.vue';
import InputField from '../../components/forms/input.vue';
import InputLabel from '../../components/forms/label.vue';
import Go from '../../components/link.vue';
import LoginLinkSent from '../../components/login-link-sent.vue';

import { SEND_USER_LOGIN_LINK } from '../../graphql/mutations';
import GraphQLError from '../../utils/graphql-error';

export default {
  components: {
    Alert,
    Btn,
    Go,
    InputField,
    InputLabel,
    LoginLinkSent,
  },

  head: {
    title: { inner: 'Sign In' },
  },

  data: () => ({
    email: null,
    error: null,
    isLoading: false,
    sent: false,
  }),

  computed: {
    redirectTo() {
      return this.$route.query.next;
    },
  },

  methods: {
    async login() {
      try {
        this.sending = true;
        this.sent = false;
        this.error = null;
        const input = { email: this.email, redirectTo: this.redirectTo };
        await this.$apollo.mutate({ mutation: SEND_USER_LOGIN_LINK, variables: { input } });
        this.sent = true;
      } catch (e) {
        this.error = new GraphQLError(e);
      } finally {
        this.sending = false;
      }
    },
  },
};
</script>
