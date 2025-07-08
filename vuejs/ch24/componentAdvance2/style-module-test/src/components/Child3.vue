<template>
  <div :class="$style.child">
    <h2>child</h2>
  </div>
</template>

<script>
export default {
  name: 'Child3',
};
</script>

<style module>
.child {
  background-color: green;
  padding: 1rem;
}
</style>
