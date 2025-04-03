<template>
  <div>
    <h3>asdfasd</h3>
    <CheckBox
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :checked="item.checked"
      @CheckedChange="CheckedChangeHandler"
    >
      <span v-if="item.checked">
        <li>{{ item.label }}</li>
      </span>
      <span v-else>{{ item.label }}</span>
    </CheckBox>
  </div>
</template>

<script>
import CheckBox from './CheckBox.vue';

export default {
  name: 'SlotTest',
  components: { CheckBox },
  data() {
    let model = {
      items: [
        { id: 'V', checked: true, label: 'Vue' },
        { id: 'A', checked: false, label: 'ANGULAR' },
        { id: 'R', checked: false, label: 'REACT' },
        { id: 'S', checked: false, label: 'SVELTE' },
      ],
    };
    return model;
  },
  methods: {
    CheckedChangeHandler(arg) {
      let item = this.items.find((item) => item.id === arg.id);
      item.checked = arg.checked;
    },
  },
};
</script>
