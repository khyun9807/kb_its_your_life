<template>
  <div class="header">
    <h1 class="headerText">태평양 전쟁 해전</h1>
    <nav>
      <ul class="nav nav-tabs nav-fill">
        <li
          v-for="tab in tabs"
          :key="tab.id"
          class="nav-item"
          :class="{ active: tab.id === currentTab }"
          @click="changeTab(tab.id)"
        >
          {{ tab.label }}
        </li>
      </ul>
    </nav>
  </div>
  <div class="container">
    <keep-alive include="MidwayTab,CoralSeaTab">
      <component :is="currentTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import CoralSeaTab from './components/CoralSeaTab.vue';
import LeyteGulfTab from './components/LeyteGulfTab.vue';
import MidwayTab from './components/MidwayTab.vue';

export default {
  name: 'App',
  components: { CoralSeaTab, LeyteGulfTab, MidwayTab },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
    },
  },
  data() {
    return {
      currentTab: 'CoralSeaTab',
      tabs: [
        { id: 'CoralSeaTab', label: 'coralcoral' },
        { id: 'MidwayTab', label: 'MidwayMidway' },
        { id: 'LeyteGulfTab', label: 'LeyteGulf' },
      ],
    };
  },
};
</script>

<style>
.header {
  padding: 20px 0px 0px 20px;
}
.headerText {
  padding: 0px 20px 40px 20px;
}
.tab {
  padding: 30px;
}
</style>
