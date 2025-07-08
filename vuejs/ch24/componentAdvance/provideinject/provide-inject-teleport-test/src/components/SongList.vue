<template>
  <ul>
    <SongListItem v-for="song in songs" :key="song.id" :song="song" />
  </ul>
  <p>{{ doneCount }}</p>
</template>

<script>
import SongListItem from './SongListItem.vue';
export default {
  name: 'SongList',
  components: { SongListItem },
  props: ['songs'],
  inject: ['doneCount'],
};
</script>
