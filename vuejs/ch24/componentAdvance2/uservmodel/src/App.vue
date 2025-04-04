<template>
  <InputText v-model:nameval="valname" />
  <li>
    <span>{{ valname.val }}</span>
  </li>
</template>

<script>
import InputText from './components/InputText.vue';

export default {
  name: 'App',
  components: { InputText },
  data() {
    let model = {
      valname: { val: 'd' },
    };
    return model;
  },
};
</script>
