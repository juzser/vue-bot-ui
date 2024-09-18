<template>
<div :class="['vcu-trigger', modelValue && 'vcu-trigger--active']">
  <div class="vcu-trigger__wrapper">
    <button
      class="vcu-trigger__button"
      @click="handleClick"
    >
      <transition name="vcu-trigger-animation">
        <span
          v-if="!modelValue"
          class="vcu-trigger__button-icon vcu-trigger__button-icon--inactive"
        >
          <slot v-if="slots.default"></slot>
          <IconCircle v-else />
        </span>

        <span
          v-else
          class="vcu-trigger__button-icon vcu-trigger__button-icon--active"
          >
          <slot v-if="slots.active" name="active"></slot>
          <IconClose v-else />
        </span>
      </transition>
    </button>
  </div>
</div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import IconCircle from '@/assets/circle.svg?component';
import IconClose from '@/assets/close.svg?component';

interface Props {
  modelValue: boolean;
}

const props = defineProps<Props>();
const slots = useSlots();

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'click', value: boolean): void;
}>();

const handleClick = () => {
  emits('update:modelValue', !props.modelValue);
  emits('click', !props.modelValue);
};
</script>

<style lang="scss">
@import '@/scss/components/trigger';
</style>
