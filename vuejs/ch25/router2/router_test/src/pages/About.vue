<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 : {{ currentRoute.fullPath }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'About',
  setup() {
    const currentRoute = useRoute();
    return { currentRoute };
  },
};
</script>
