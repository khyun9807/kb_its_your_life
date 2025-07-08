<template>
  <div :class="$style.child">
    <h2>child</h2>
  </div>
</template>

<script>
export default {
  name: 'Child2',
};
</script>

<style module>
.child {
  background-color: red;
  padding: 1rem;
}
</style>
