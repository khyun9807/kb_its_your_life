<template>
  <div>
    <input
      type="text"
      :value="nameval"
      @input="$emit('update:nameval', { val: $event.target.value })"
    />
    <h1>{{ nameval.val }}</h1>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: ['nameval'],
};
</script>
