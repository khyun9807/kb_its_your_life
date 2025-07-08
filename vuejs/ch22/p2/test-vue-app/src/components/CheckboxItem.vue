<template>
  <li>
    <input type="checkbox" v-bind:checked="checked" />
    {{ name }}
  </li>
</template>

<script>
export default {
  name: 'CheckboxItem',
  props: ['name', 'checked'],
};
</script>
