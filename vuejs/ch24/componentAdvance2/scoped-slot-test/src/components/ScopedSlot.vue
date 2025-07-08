<template>
  <div>
    <h1>Scoped</h1>
    <CheckBox v-for="i in items" :key="i.id" :item="i" @CC="CheckedChange">
      <template v-slot:iconslot="is">
        <i>{{ is.label }} {{ is.checked }}</i>
      </template>
      <template v-slot:textslot="ts">
        <span v-if="ts.checked">{{ ts.label }}</span>
        <span v-else>
          <li>{{ ts.label }}</li>
        </span>
      </template>
    </CheckBox>
  </div>
</template>

<script>
import CheckBox from './CheckBox.vue';

export default {
  name: 'ScopedSlot',
  components: { CheckBox },
  data() {
    let model = {
      items: [
        { id: 'V', checked: false, label: 'Vue' },
        { id: 'R', checked: false, label: 'React' },
        { id: 'S', checked: false, label: 'Svelte' },
        { id: 'A', checked: false, label: 'Angular' },
      ],
    };
    return model;
  },
  methods: {
    CheckedChange(arg) {
      let item = this.items.find((i) => {
        return i.id === arg.id;
      });
      item.checked = arg.checked;
    },
  },
};
</script>
