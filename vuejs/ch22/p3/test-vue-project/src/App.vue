<template>
  <div>
    <InputName @namesChange="changeNames" />
    <br />
    <br />
    <h1>app 데이터:{{ data }}</h1>
  </div>
</template>

<script>
import InputName from './components/InputName.vue';

let model = {
  data: '',
};
export default {
  name: 'App',
  components: {
    InputName,
  },
  data() {
    return model;
  },
  methods: {
    changeNames(e) {
      this.data = e.names;
    },
  },
};
</script>
