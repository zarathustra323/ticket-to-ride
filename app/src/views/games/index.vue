<template>
  <div class="p-4 space-y-4">
    <h2 class="font-medium text-lg">My Games</h2>
    <go class="block" :to="{ name: 'games.new' }">Create New Game</go>
    <router-view />
  </div>
</template>

<script>
import Go from '../../components/link.vue';

export default {
  components: {
    Go,
  },
};
</script>
