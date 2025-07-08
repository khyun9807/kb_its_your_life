<template>
  <div>
    <h4>메뉴 선택</h4>
    <button
      v-for="menu in menus"
      :key="menu.name"
      @click="$emit('select-drink', { selectedName: menu.name })"
    >
      {{ menu.name }} ({{ menu.price }})
    </button>
  </div>
</template>

<script>
export default {
  name: 'MenuList',
  props: ['menus'],
  emits: ['select-drink'],
};
</script>
