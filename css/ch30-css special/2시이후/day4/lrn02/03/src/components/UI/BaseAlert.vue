<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'success',
  },
})

const alertClass = computed(() => {
  return {
    'alert-success': props.variant === 'success',
    'alert-warning': props.variant === 'warning',
    'alert-error': props.variant === 'error',
  }
})
</script>
<template>
  <div :class="alertClass">
    <slot>알림 메시지입니다.</slot>
  </div>
</template>
<style scoped>
.alert-success {
  background-color: #dcfce7;
  color: #15803d;
  border-left: 4px solid #22c55e;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
}

.alert-warning {
  background-color: #fef3c7;
  color: #92400e;
  border-left: 4px solid #facc15;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
}

.alert-error {
  background-color: #fee2e2;
  color: #b91c1c;
  border-left: 4px solid red;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
}
</style>
