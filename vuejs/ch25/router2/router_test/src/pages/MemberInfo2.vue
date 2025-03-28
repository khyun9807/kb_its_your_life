<template>
  <div class="mt-5">
    <img :src="member.photo" class="img" />
    <h4 class="mt-2">{{ member.name }} ({{ member.role }})</h4>
    <p>{{ member.role }}</p>
    <a
      class="fa fa-instagram m-1"
      v-if="member.insta && member.insta !== ''"
      :href="member.insta"
    ></a>
    <a
      class="fa fa-facebook m-1"
      v-if="member.facebook && member.facebook !== ''"
      :href="member.facebook"
    ></a>
    <a
      class="fa fa-youtube m-1"
      v-if="member.youtube && member.youtube !== ''"
      :href="member.youtube"
    ></a>
    <br /><br /><br />
    <router-link :to="{ name: 'members' }">멤버 목록으로</router-link>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import members from '@/members.json';

export default {
  name: 'MemberInfo',
  setup() {
    const currentRoute = useRoute();
    const id = parseInt(currentRoute.params.id);
    const member = members.find((mem) => {
      return mem.id === id;
    });

    return { member };
  },
};
</script>
