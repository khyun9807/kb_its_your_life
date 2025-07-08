<template>
  <li>
    <input type="checkbox" v-bind:checked="idol.checked" />
    {{ idol.name }}
  </li>
</template>

<script>
export default {
  name: 'CheckboxItem',
  //props: ['idol'],
  props: {
    idol: Object,
  },
};
</script>
