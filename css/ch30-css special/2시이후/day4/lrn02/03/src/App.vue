<!-- <script setup>
import CommonHeader from './components/CommonHeader.vue'
import MainGallary from './components/MainGallary.vue'
</script> -->
<script>
import { ref } from 'vue'
import CommonHeader from './components/CommonHeader.vue'
import MainGallary from './components/MainGallary.vue'
export default {
  components: {
    CommonHeader,
    MainGallary,
  },
  setup() {
    // composition api
    const number = ref(0)
    return { number }
  },
}
</script>
<template>
  <CommonHeader />
  <MainGallary />
</template>
<style scoped></style>
