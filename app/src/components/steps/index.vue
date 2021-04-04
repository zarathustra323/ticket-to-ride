<template>
  <div class="lg:border-t lg:border-b lg:border-gray-200">
    <nav :class="classes" aria-label="Progress">
      <ol :class="listClasses">
        <step v-for="(step, index) in steps"
          :key="index"
          :title="step.title"
          :description="step.description"
          :step-number="index + 1"
          :current-step="currentStep"
          :total-steps="steps.length"
        />
      </ol>
    </nav>
  </div>
</template>

<script>
import Step from './step.vue';

export default {
  components: {
    Step,
  },
  props: {
    steps: {
      type: Array,
      default: () => [],
    },
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    classes: [
      'mx-auto',
      'max-w-7xl',
      'px-4',
      'sm:px-6',
      'lg:px-8',
    ],
    listClasses: [
      'rounded-md',
      'overflow-hidden',
      'lg:flex',
      'lg:border-l',
      'lg:border-r',
      'lg:border-gray-200',
      'lg:rounded-none',
    ],
  }),
};
</script>
