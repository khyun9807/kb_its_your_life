<template>
  <div>
    X: <input type="text" v-model.number="stateObj.x" /><br />
    Y: <input type="text" v-model.number="y" /><br />
    <button @click="calcAdd">계산</button><br />
    <div>결과 : {{ result }}</div>
    <div>결과2 : {{ result2 }}</div>
    <div>결과3 : {{ result3 }}</div>
  </div>
</template>

<script>
import { ref, computed, reactive, watch } from 'vue';

export default {
  name: 'Calc',
  setup(props, context) {
    const stateObj = reactive({ x: 10, y: 20, z: 30 });
    const result3 = ref(stateObj.x);
    watch(
      () => stateObj.x,
      (cur, old) => {
        result3.value = cur;
      }
    );

    const x = ref(10);
    const y = ref(20);
    const result = ref(30);
    const calcAdd = () => {
      result.value = x.value + y.value;
    };
    const result2 = computed(() => {
      return x.value + y.value;
    });
    return { x, y, result, calcAdd, result2, stateObj, result3 };
  },
};
</script>
