<template>
  <div>
    <ScopedSlot />
  </div>
</template>

<script>
import ScopedSlot from './components/ScopedSlot.vue';
export default {
  name: 'App',
  components: { ScopedSlot },
};
</script>
