<template>
  <div class="relative inline-block text-left" v-closeable="onOutsideClick">
    <div>
      <btn :is-open="isOpen" @click="isOpen = !isOpen" />
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
          :to="{ name: 'games.new', query: { id: 'CLASSIC' } }"
          @click="isOpen = false"
        >
          Classic
        </dropdown-link>
      </dropdown-menu>
    </transition>
  </div>
</template>

<script>
import Btn from './button.vue';
import DropdownMenu from './menu.vue';
import DropdownLink from './link.vue';

export default {
  components: {
    Btn,
    DropdownMenu,
    DropdownLink,
  },

  data: () => ({
    isOpen: false,
  }),

  methods: {
    onOutsideClick() {
      if (this.isOpen) this.isOpen = false;
    },
  },
};
</script>
