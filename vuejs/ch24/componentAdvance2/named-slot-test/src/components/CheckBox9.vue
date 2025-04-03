<template>
  <div>
    <slot name="iconslot">iconslot</slot>
    <input
      type="checkbox"
      :checked="checked"
      :value="id"
      @changed="
        $emit('checked-changed', { id, checked: $event.target.checked })
      "
    />
    <slot name="textslot">textslot</slot>
  </div>
</template>

<script>
export default {
  name: 'CheckBox9',
  props: ['id', 'checked'],
};
</script>
