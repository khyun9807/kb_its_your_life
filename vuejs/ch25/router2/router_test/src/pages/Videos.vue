<template>
  <div class="card card-body">
    <h2>Videos</h2>
    <p>
      테스트:
      {{ currentRoute.query }}, {{ currentRoute.path }},
      {{ currentRoute.params }}
    </p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'Videos',
  setup() {
    const currentRoute = useRoute();

    return { currentRoute };
  },
};
</script>
