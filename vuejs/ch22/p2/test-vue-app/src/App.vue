<template>
  <div>
    <h2>app 컴포넌트</h2>
    <hr />
    <ul>
      <CheckboxItem
        v-for="idol in idols"
        v-bind:key="idol.id"
        v-bind:name="idol.name"
        v-bind:checked="idol.checked"
      />
      <CheckboxItem2
        v-for="idol in idols"
        v-bind:key="idol.id"
        v-bind:idol="idol"
      />
    </ul>
  </div>
</template>

<script>
import CheckboxItem from './components/CheckboxItem.vue';
import CheckboxItem2 from './components/CheckboxItem2.vue';

let model = {
  idols: [
    { id: 1, name: 'BTS', checked: true },
    { id: 2, name: 'Black Pink', checked: false },
    { id: 3, name: 'EXO', checked: false },
    { id: 4, name: 'ITZY', checked: false },
  ],
};

export default {
  name: 'App',
  components: {
    CheckboxItem,
    CheckboxItem2,
  },
  data() {
    return model;
  },
};
</script>
