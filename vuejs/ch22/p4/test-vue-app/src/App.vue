<template>
  <div>
    <h1>카페 주문 앱</h1>
    <MenuList :menus="menuList" @select-drink="sd" />
    <br />
    <div id="ghgh" class="container">
      {{ selectedDrink }}
    </div>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue';

let model = {
  menuList: [
    { name: '아메리카노', price: 4000 },
    { name: '카페라떼', price: 4500 },
    { name: '바닐라라떼', price: 4800 },
    { name: '콜드브루', price: 5000 },
  ],
  selectedDrink: '',
};
export default {
  name: 'App',
  components: { MenuList },
  data() {
    return model;
  },
  methods: {
    sd(e) {
      this.selectedDrink = e.selectedName;
    },
  },
};
</script>
