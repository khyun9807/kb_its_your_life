import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import MemberInfo2 from '@/pages/MemberInfo2.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/about', component: About, name: 'about' },
    { path: '/members', component: Members, name: 'members' },
    {
      path: '/videos',
      component: Videos,
      name: 'videos',
      children: [{ path: ':id', component: 'VideoPlayer', name: 'videos/id' }],
    },
    { path: '/members/:id', component: MemberInfo2, name: 'members/id' },
    { path: '/members/:id1', component: MemberInfo, names: 'members/id1' },
  ],
});

export default router;
