<template>
  <portal to="modals">
    <div
      v-show="showWrapper"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div :class="containerClasses">
        <!-- backdrop here -->
        <modal-backdrop :show="value" @click="$emit('input', !value)" />

        <!-- This element is to trick the browser into centering the modal contents. -->
        <trick-element />

        <!-- panel -->
        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="ease-in duration-200"
          leave-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"

          @enter="$emit('enter')"
          @after-enter="$emit('after-enter')"
          @before-leave="isLeaving = true"
          @after-leave="afterLeave"
          @leave-cancelled="isLeaving = false"
        >
          <modal-panel v-show="value">
            <slot />
          </modal-panel>
        </transition>
      </div>
    </div>
  </portal>
</template>

<script>
import ModalBackdrop from './backdrop.vue';
import ModalPanel from './panel.vue';
import TrickElement from './trick-element.vue';

export default {
  components: {
    ModalBackdrop,
    ModalPanel,
    TrickElement,
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    containerClasses: [
      'flex',
      'items-end',
      'justify-center',
      'min-h-screen',
      'pt-4',
      'px-4',
      'pb-20',
      'text-center',
      'sm:block',
      'sm:p-0',
    ],
    isLeaving: false,
  }),

  computed: {
    showWrapper() {
      if (this.isLeaving) return true;
      return this.value;
    },
  },

  methods: {
    afterLeave(event) {
      this.isLeaving = false;
      this.$emit('after-leave', event);
    },
  },
};
</script>
