<template>
  <div>
    <h2 class="m-4">Members</h2>
    <!-- <p>요청 경로 : {{ currentRoute.fullPath }}</p> -->
    <div class="container">
      <div class="row">
        <div
          class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2"
          v-for="member in members"
          :key="member.id"
        >
          <router-link :to="{ name: 'members/id', params: { id: member.id } }">
            <img :src="member.photo" class="img" />
            <br />
            <h6 class="display-7">{{ member.name }}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { useRoute } from 'vue-router';
import members from '@/members.json';

export default {
  name: 'Members',
  setup() {
    // const currentRoute = useRoute();
    // return { currentRoute };
    return { members };
  },
};
</script>
