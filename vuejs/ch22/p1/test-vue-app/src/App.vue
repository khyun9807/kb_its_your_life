<template>
  <div>
    <h2>app component</h2>
    <hr />
    <ul>
      <CheckboxItem />
      <CheckboxItem />
      <CheckboxItem />
      <CheckboxItem />
    </ul>
  </div>
</template>

<script>
import CheckboxItem from './components/CheckboxItem.vue'

export default {
  name: 'App',
  components: { CheckboxItem },
}
</script>
