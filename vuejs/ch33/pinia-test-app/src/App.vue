<script setup>
import { computed } from 'vue';
import { useCounterStore } from './stores/counter.js';

const store = useCounterStore();
let dCount = computed(() => store.doubleCount);
let cIncrement = store.increment;
console.log(store);
</script>

<template>
  <h1>{{ store }}</h1>
  <h1>{{ dCount }}</h1>
  <h1>{{ cIncrement }}</h1>
</template>
