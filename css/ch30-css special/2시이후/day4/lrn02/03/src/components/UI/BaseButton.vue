<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
})

const buttonClass = computed(() => {
  return {
    'btn-primary': props.variant === 'primary',
    'btn-outline': props.variant === 'outline',
    'btn-pill': props.variant === 'pill',
  }
})
</script>
<template>
  <button :class="buttonClass">
    <slot>Button</slot>
  </button>
</template>
<style scoped>
.btn-primary {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  margin-right: 10px;
}
.btn-outline {
  background: none;
  border: 2px solid #3b82f6;
  color: #3b82f6;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  margin-right: 10px;
}
.btn-pill {
  background-color: #10b981;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 50%;
}
</style>
