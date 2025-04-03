<template>
  <div :class="$style.child">
    <h2>child</h2>
  </div>
</template>

<script>
export default {
  name: 'Child1',
};
</script>

<style module>
.child {
  background-color: yellow;
  padding: 1rem;
}
</style>
