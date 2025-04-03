<template>
  <div>
    <h3>dfasdf</h3>
    <CheckBox
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :label="item.label"
      :checked="item.checked"
      @check-changed="CheckBoxChanged"
    ></CheckBox>
  </div>
</template>

<script>
import CheckBox from './CheckBox.vue';

export default {
  name: 'NoSlotTest',
  components: { CheckBox },
  data() {
    let model = {
      items: [
        { id: 'V', checked: true, label: 'Vue' },
        { id: 'A', checked: false, label: 'Angular' },
        { id: 'R', checked: false, label: 'React' },
        { id: 'S', checked: false, label: 'Svelte' },
      ],
    };
    return model;
  },
  methods: {
    CheckBoxChanged(e) {
      let item = this.items.find((item) => item.id === e.id);
      item.checked = e.checked;
    },
  },
};
</script>
