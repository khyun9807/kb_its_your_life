<script setup>
import { ref } from "vue";

const imageUrls = ref([
  "https://cdn.pixabay.com/photo/2023/12/30/11/22/monstera-8477880_640.jpg",
  "https://cdn.pixabay.com/photo/2020/03/09/17/03/eggs-4916430_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/04/16/08/35/skincare-7929470_640.jpg",
  "https://cdn.pixabay.com/photo/2021/03/25/10/01/abstract-6122611_640.jpg",
  "https://cdn.pixabay.com/photo/2017/09/06/20/20/background-2722851_640.jpg",
  "https://cdn.pixabay.com/photo/2021/05/23/05/02/origami-6275164_640.jpg",
  "https://cdn.pixabay.com/photo/2022/04/09/19/02/moon-7122089_640.png",
]);
</script>
<template>
  <h1>👇이미지를 스크롤 해보세요👇</h1>
  <img v-for="(src, index) in imageUrls" :key="index" v-lazy="src" loading="lazy" />
</template>
<style scoped>
img {
  width: 100%;
}
</style>
