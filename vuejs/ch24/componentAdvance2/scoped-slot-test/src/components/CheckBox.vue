<template>
  <div>
    <slot name="iconslot" :checked="item.checked" :label="item.label"
      >iconslot</slot
    >
    <input
      type="checkbox"
      :checked="item.checked"
      :id="item.id"
      @change="$emit('CC', { id: item.id, checked: $event.target.checked })"
    />
    <slot name="textslot" :checked="item.checked" :label="item.label"
      >textslot</slot
    >
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: ['item'],
};
</script>
