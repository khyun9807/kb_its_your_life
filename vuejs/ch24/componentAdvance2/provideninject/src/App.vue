<template>
  <div>
    <SongList></SongList>
  </div>
</template>

<script>
import SongList from './components/SongList.vue';
import { computed } from 'vue';

export default {
  name: 'App',
  components: { SongList },
  data() {
    let model = {
      songs: [
        { id: '1', title: 'drowning', done: true },
        { id: '2', title: 'babylove', done: false },
        { id: '3', title: 'eviljordan', done: true },
        { id: '4', title: 'popout', done: false },
      ],
    };

    return model;
  },
  provide() {
    let data = {
      songs: this.songs,
      doneCount: computed(() => {
        let doneSongs = this.songs.filter((a) => {
          return a.done === true;
        });
        return doneSongs.length;
      }),
    };
    return data;
  },
};
</script>
