<template>
  <div>
    <span>이름: </span>
    <input type="text" v-model="names" />
    <button v-on:click="$emit('namesChange', { names })">이벤트 발신</button>
  </div>
</template>

<script>
let model = {
  names: '',
};
export default {
  name: 'InputName',
  emits: ['namesChange'],
  data() {
    return model;
  },
};
</script>
