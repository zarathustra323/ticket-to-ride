<template>
  <div class="p-4 space-y-4 max-w-md">
    <h2 class="font-medium text-xl">My Games</h2>

    <div>
      <new-game-dropdwon />
    </div>

    <div v-if="isLoading">
      Loading games...
    </div>
    <div v-else-if="error">
      {{ error.message }}
    </div>
    <div class="grid grid-cols-1" v-else>
      <div
        v-for="instance in instances"
        :key="instance.id"
        class="p-4 border border-gray-300 rounded-md shadow-sm"
      >
        Type: {{ instance.game.name }}
        <div class="mt-4">
          <div class="font-medium mb-1">Players</div>
          <div
            v-for="player in instance.players"
            :key="player.id"
          >
            {{ player.name }} ({{ player.color.name }})
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import NewGameDropdwon from '../../components/new-game-dropdown/index.vue';

import { USER_GAME_INSTANCES } from '../../graphql/queries';
import GraphQLError from '../../utils/graphql-error';

export default {
  components: {
    NewGameDropdwon,
  },

  apollo: {
    myGameInstances: {
      query: USER_GAME_INSTANCES,
      error(e) {
        this.error = new GraphQLError(e);
      },
      watchLoading(isLoading) {
        this.isLoading = isLoading;
        if (isLoading) this.error = null;
      },
    },
  },

  data: () => ({
    error: null,
    isLoading: false,
    myGameInstances: { edges: [], pageInfo: {} },
  }),

  computed: {
    instances() {
      return this.myGameInstances.edges.map((edge) => edge.node);
    },
  },
};
</script>
