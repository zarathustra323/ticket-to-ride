<template>
  <div class="p-4 space-y-4">
    <h2 class="font-medium text-xl">My Games</h2>

    <div>
      <h3>Create New Game</h3>
      <div v-if="isLoading">
        Loading game types...
      </div>
      <div v-else-if="error">
        {{ error.message }}
      </div>
      <ul v-else>
        <li v-for="game in games" :key="game.id">
          <go :to="{ name: 'games.new', query: { id: game.id } }">Create {{ game.name }} Game</go>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
import Go from '../../components/link.vue';

import { GAMES } from '../../graphql/queries';
import GraphQLError from '../../utils/graphql-error';

export default {
  components: {
    Go,
  },

  apollo: {
    games: {
      query: GAMES,
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
    games: [],
  }),
};
</script>
