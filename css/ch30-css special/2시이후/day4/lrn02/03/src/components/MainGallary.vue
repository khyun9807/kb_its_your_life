<script setup>
import BaseAlert from './UI/BaseAlert.vue'
import BaseBadge from './UI/BaseBadge.vue'
import BaseButton from './UI/BaseButton.vue'
</script>
<template>
  <!-- 그리드 컨테이너 -->
  <main class="component-grid">
    <!-- 컴포넌트 그룹 (그리드 아이템) -->
    <section class="component-card">
      <h2>버튼</h2>
      <BaseButton variant="primary">Primary</BaseButton>
      <BaseButton variant="outline">Outline</BaseButton>
      <BaseButton variant="pill">Pill</BaseButton>
    </section>
    <section class="component-card">
      <h2>알림창</h2>
      <BaseAlert variant="number">Success</BaseAlert>
      <BaseAlert variant="warning">Warning</BaseAlert>
      <BaseAlert variant="error">Error</BaseAlert>
    </section>
    <section class="component-card">
      <h2>뱃지</h2>
      <BaseBadge variant="success">badge</BaseBadge>
      <BaseBadge variant="number">3</BaseBadge>
    </section>
  </main>
</template>
<style scoped></style>
