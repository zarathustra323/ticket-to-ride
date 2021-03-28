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
        <li v-for="type in gameTypes" :key="type.id">
          <go :to="{ name: 'games.new', query: { type: type.id } }">Create {{ type.name }} Game</go>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
import Go from '../../components/link.vue';

import { GAME_TYPES } from '../../graphql/queries';
import GraphQLError from '../../utils/graphql-error';

export default {
  components: {
    Go,
  },

  apollo: {
    gameTypes: {
      query: GAME_TYPES,
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
    gameTypes: [],
  }),
};
</script>
