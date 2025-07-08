<template>
  <div>
    <SongListItem
      v-for="song in songs"
      :key="song.id"
      :song="song"
    ></SongListItem>
    <h1>done songs: {{ doneCount }}</h1>
  </div>
</template>

<script>
import SongListItem from './SongListItem.vue';
export default {
  name: 'SongList',
  components: { SongListItem },
  inject: ['songs', 'doneCount'],
};
</script>
