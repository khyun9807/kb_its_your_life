<template>
  <div>
    <input
      type="checkbox"
      :value="id"
      :checked="checked"
      @change="$emit('CheckedChange', { id, checked: $event.target.checked })"
    />
    <slot> slot </slot>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: ['id', 'checked'],
};
</script>
