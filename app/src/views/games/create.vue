<template>
  <modal :value="show" @after-leave="$router.push({ name: 'games.index' })">
    <div :class="headerClasses">
      <h2 class="text-lg font-medium text-gray-800 truncate">Create New Game</h2>
      <close-button @click="show = false" />
    </div>
    <div :class="bodyClasses">
      Hello world
    </div>
  </modal>
</template>

<script>
import CloseButton from '../../components/modal/close-button.vue';
import Modal from '../../components/modal/index.vue';

export default {
  components: {
    CloseButton,
    Modal,
  },

  data: () => ({
    bodyClasses: [
      'p-4',
      'space-y-5',
      'bg-gradient-to-b',
      'from-gray-50',
      'to-white',
      'rounded-b-lg',
      'overflow-hidden',
    ],
    error: null,
    headerClasses: [
      'p-4',
      'flex',
      'items-center',
      'justify-between',
      'border-b',
      'border-gray-200',
    ],
    isLoading: false,
    name: null,
    show: false,
  }),

  mounted() {
    this.show = true;
  },

  methods: {
    returnToList(value) {
      if (!value) this.$router.push({ name: 'games.index' });
    },
  },
};
</script>
