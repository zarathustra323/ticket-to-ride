<template>
  <div class="p-4 border border-gray-300 rounded-md shadow-sm space-y-4">
    <div class="text-lg font-medium">Create New Game</div>

    <form class="space-y-4">
      <div>
        <input-label for="game.name" class="ml-1 mb-1">Name</input-label>
        <input-field
          id="game.name"
          v-model="name"
          type="text"
          :disabled="isLoading"
        />
      </div>
    </form>
    <btn type="button" @click="$router.push('/games')">
      Cancel
    </btn>
  </div>
</template>

<script>
import Btn from '../../components/forms/button.vue';
import InputField from '../../components/forms/input.vue';
import InputLabel from '../../components/forms/label.vue';

export default {
  components: {
    Btn,
    InputField,
    InputLabel,
  },

  data: () => ({
    error: null,
    isLoading: false,
    name: null,
  }),
};
</script>
