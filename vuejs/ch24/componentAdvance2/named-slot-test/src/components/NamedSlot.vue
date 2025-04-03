<template>
  <div>
    <CheckBox9
      v-for="item in items"
      :key="item.id"
      :checked="item.checked"
      :id="item.id"
      @checked-change="CCHandler"
    >
      <template v-slot:iconslot>
        <i>{{ item.label }}</i>
      </template>
      <template v-slot:textslot>
        <span v-if="item.checked">
          <li>{{ item.label }}</li>
        </span>
        <span v-else>{{ item.label }}</span>
      </template>
    </CheckBox9>
  </div>
</template>

<script>
import CheckBox9 from './CheckBox9.vue';

export default {
  name: 'NamedSlot',
  components: { CheckBox9 },
  data() {
    let model = {
      items: [
        { id: 'V', checked: true, label: 'Vue' },
        { id: 'R', checked: false, label: 'React' },
        { id: 'A', checked: false, label: 'Angular' },
        { id: 'S', checked: false, label: 'Svelte' },
      ],
    };

    return model;
  },
  methods: {
    CCHandler(arg) {
      let item = this.items.find((i) => i.id === arg.id);
      item.checked = arg.checked;
    },
  },
};
</script>
