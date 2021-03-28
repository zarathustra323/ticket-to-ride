<template>
  <div>
    <div class="p-4 text-sm">
      <go :to="{ name: 'user.logout' }">Logout</go>
    </div>
    <router-view />
  </div>
</template>

<script>
import Go from '../components/link.vue';

export default {
  components: {
    Go,
  },
};
</script>
