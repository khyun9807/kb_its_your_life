<template>
  <div>
    <NamedSlot></NamedSlot>
  </div>
</template>

<script>
import NamedSlot from './components/NamedSlot.vue';

export default {
  name: 'App',
  components: { NamedSlot },
};
</script>
