<template>
  <div class="p-4 max-w-sm space-y-6">
    <h1 class="text-lg font-medium">{{ title }}</h1>
    <div v-if="error">
      {{ error.message }}
    </div>
  </div>
</template>

<script>
import userService from '../../services/user';

export default {
  components: {},

  data: () => ({
    error: null,
  }),

  computed: {
    title() {
      if (this.error) return 'Oops';
      return 'Logging out...';
    },
  },

  created() {
    this.logout();
  },

  methods: {
    async logout() {
      this.error = null;
      try {
        await userService.logout();
      } catch (e) {
        this.error = e.message;
      }
    },
  },
};
</script>
