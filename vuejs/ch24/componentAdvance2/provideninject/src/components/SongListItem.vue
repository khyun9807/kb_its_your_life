<template>
  <div>
    <h1>{{ song.id }}</h1>
    <p>{{ song.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'SongListItem',
  props: ['song'],
};
</script>
