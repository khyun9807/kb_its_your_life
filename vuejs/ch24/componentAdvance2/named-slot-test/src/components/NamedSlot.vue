<template>
  <div>
    <h1>Name</h1>
    <CheckBox
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      checked="item.checked"
      @cc="CCHandler"
    >
      <template v-slot:iconslot>
        <i>icon~~</i>
      </template>
      <template v-slot:textslot>
        <span v-if="item.checked"> checked {{ item.label }} </span>
        <span v-else> unchecked {{ item.label }} </span>
      </template>
    </CheckBox>
  </div>
</template>

<script>
import CheckBox from './CheckBox.vue';

export default {
  name: 'NamedSlot',
  components: { CheckBox },
  data() {
    let model = {
      items: [
        { id: 'V', checked: true, label: 'Vue' },
        { id: 'R', checked: true, label: 'React' },
        { id: 'A', checked: true, label: 'Angular' },
        { id: 'S', checked: true, label: 'Svelte' },
      ],
    };
    return model;
  },
  methods: {
    CCHandler(arg) {
      let item = this.items.find((i) => {
        return i.id === arg.id;
      });

      item.checked = arg.checked;
    },
  },
};
</script>
