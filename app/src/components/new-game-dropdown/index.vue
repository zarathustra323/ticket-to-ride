<template>
  <div class="relative inline-block text-left" v-closeable="onOutsideClick">
    <div>
      <btn
        :is-open="isOpen"
        :is-loading="isLoading"
        @click="isOpen = !isOpen"
      />
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <dropdown-menu v-show="isOpen">
        <dropdown-link
          v-for="game in games"
          :key="game.id"
          :to="{ name: 'games.new', query: { id: game.id } }"
          @click="isOpen = false"
        >
          {{ game.name }}
        </dropdown-link>
      </dropdown-menu>
    </transition>
  </div>
</template>

<script>
import Btn from './button.vue';
import DropdownMenu from './menu.vue';
import DropdownLink from './link.vue';

import { GAMES } from '../../graphql/queries';
import GraphQLError from '../../utils/graphql-error';

export default {
  components: {
    Btn,
    DropdownMenu,
    DropdownLink,
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
    games: [],
    isLoading: null,
    isOpen: false,
  }),

  methods: {
    onOutsideClick() {
      if (this.isOpen) this.isOpen = false;
    },
  },
};
</script>
