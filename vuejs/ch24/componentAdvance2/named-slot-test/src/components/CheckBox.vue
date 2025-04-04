<template>
  <div>
    <slot name="iconslot">아이콘슬롯</slot>
    <input
      type="checkbox"
      :value="id"
      :checked="checked"
      @change="$emit('cc', { id, checked: $event.target.checked })"
    />
    <slot name="textslot">텍스트슬롯</slot>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: ['id', 'checked'],
};
</script>
