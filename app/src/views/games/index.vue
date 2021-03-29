<template>
  <div class="p-4 space-y-4">
    <h2 class="font-medium text-xl">My Games</h2>

    <div>
      <new-game-dropdwon />
    </div>
    <router-view />
  </div>
</template>

<script>
import NewGameDropdwon from '../../components/new-game-dropdown/index.vue';

export default {
  components: {
    NewGameDropdwon,
  },
};
</script>
