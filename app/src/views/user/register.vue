<template>
  <div class="p-4 max-w-sm space-y-6">
    <div>
      <h1 class="text-lg font-medium">Register as a new user</h1>
      <h2 class="font-medium">
        Or
        <go :to="{ name: 'user.login', query: { next: redirectTo } }">
          sign in to your account
        </go>
      </h2>
    </div>
    <login-link-sent v-if="sent" />
    <form v-else class="space-y-4" @submit.prevent="register">
      <div>
        <input-label for="register.email" class="ml-1 mb-1">Email Address</input-label>
        <input-field
          id="register.email"
          v-model="user.email"
          type="email"
          autocomplete="email"
          :disabled="isLoading"
          required
        />
      </div>

      <div>
        <input-label for="register.givenName" class="ml-1 mb-1">First Name</input-label>
        <input-field
          id="register.givenName"
          v-model="user.givenName"
          type="text"
          autocomplete="given-name"
          :disabled="isLoading"
          required
        />
      </div>

      <div>
        <input-label for="register.familyName" class="ml-1 mb-1">Last Name</input-label>
        <input-field
          id="register.familyName"
          v-model="user.familyName"
          type="text"
          autocomplete="family-name"
          :disabled="isLoading"
          required
        />
      </div>

      <btn type="submit" :disabled="isLoading">
        Register
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

import { REGISTER_USER } from '../../graphql/mutations';
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
    title: { inner: 'Register' },
  },

  data: () => ({
    error: null,
    isLoading: false,
    sent: false,
    user: {},
  }),

  computed: {
    redirectTo() {
      return this.$route.query.next;
    },
  },

  methods: {
    async register() {
      try {
        this.sent = false;
        this.error = null;
        this.isLoading = true;

        // @todo add redirect!

        const variables = { input: this.user };
        await this.$apollo.mutate({ mutation: REGISTER_USER, variables });
        this.sent = true;
      } catch (e) {
        this.error = new GraphQLError(e);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
