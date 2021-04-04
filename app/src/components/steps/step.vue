<template>
  <li class="relative overflow-hidden lg:flex-1">
    <div :class="containerClasses">
      <a href="#" :class="linkClasses" :aria-current="isCurrent ? 'step' : null">
        <span :class="hiddenClasses" aria-hidden="true"></span>
        <span :class="textContainerClasses">
          <span class="flex-shrink-0">
            <span :class="stepNumberContainerClasses">
              <component
                :is="stepComponent"
                :class="stepClasses"
              >
                {{ stepLabel }}
              </component>
            </span>
          </span>
          <span class="mt-0.5 ml-4 min-w-0 flex flex-col">
            <span :class="titleClasses">
              {{ title }}
            </span>
            <span class="text-sm font-medium text-gray-500">
              {{ description }}
            </span>
          </span>
        </span>
      </a>
      <separator v-if="!isFirst" />
    </div>
  </li>
</template>

<script>
import CheckIcon from '../icons/check-sm.vue';
import Separator from './separator.vue';

export default {
  components: {
    CheckIcon,
    Separator,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    stepNumber: {
      type: Number,
      required: true,
    },
    currentStep: {
      type: Number,
      required: true,
    },
    totalSteps: {
      type: Number,
      required: true,
    },
  },

  computed: {
    isFirst() {
      return this.stepNumber === 1;
    },
    isLast() {
      return this.stepNumber === this.totalSteps;
    },
    isCompleted() {
      return this.stepNumber < this.currentStep;
    },
    isCurrent() {
      return this.stepNumber === this.currentStep;
    },
    isUpcoming() {
      return this.stepNumber > this.currentStep;
    },

    stepComponent() {
      if (this.isCompleted) return CheckIcon;
      return 'span';
    },

    stepLabel() {
      const { stepNumber } = this;
      if (stepNumber < 10) return `0${stepNumber}`;
      return stepNumber;
    },

    containerClasses() {
      const classes = [
        'border',
        'border-gray-200',
        'overflow-hidden',
        'lg:border-0',
      ];
      if (this.isFirst) classes.push('border-b-0', 'rounded-t-md');
      if (this.isLast) classes.push('border-t-0', 'rounded-b-md');
      return classes;
    },

    linkClasses() {
      const classes = [];
      if (!this.isCurrent) classes.push('group');
      return classes;
    },

    hiddenClasses() {
      const classes = [
        'absolute',
        'top-0',
        'left-0',
        'w-1',
        'h-full',
        'lg:w-full',
        'lg:h-1',
        'lg:bottom-0',
        'lg:top-auto',
      ];
      if (this.isCurrent) {
        classes.push('bg-indigo-600');
      } else {
        classes.push('bg-transparent', 'group-hover:bg-gray-200');
      }
      return classes;
    },

    textContainerClasses() {
      const classes = [
        'px-6',
        'py-5',
        'flex',
        'items-start',
        'text-sm',
        'font-medium',
      ];
      if (!this.isCompleted) {
        classes.push('lg:pl-9');
      }
      return classes;
    },

    titleClasses() {
      const classes = [
        'tracking-wide',
        'uppercase',
        'text-xs',
        'font-semibold',
      ];
      if (this.isCurrent) classes.push('text-indigo-600 ');
      if (this.isUpcoming) classes.push('text-gray-500');
      return classes;
    },

    stepNumberContainerClasses() {
      const classes = [
        'w-10',
        'h-10',
        'flex',
        'items-center',
        'justify-center',
        'rounded-full',
      ];
      if (this.isCompleted) {
        classes.push('bg-indigo-600');
      } else {
        classes.push('border-2');
      }
      if (this.isCurrent) classes.push('border-indigo-600');
      if (this.isUpcoming) classes.push('border-gray-300');
      return classes;
    },

    stepClasses() {
      const classes = [];
      if (this.isCompleted) classes.push('w-6', 'h-6', 'text-white');
      if (this.isCurrent) classes.push('text-indigo-600');
      if (this.isUpcoming) classes.push('text-gray-500');
      return classes;
    },
  },
};
</script>
