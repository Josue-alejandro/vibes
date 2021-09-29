import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from './pages/LoginPage.vue';
import NewAccount from './pages/NewAccount.vue';
import SuccesPage from './pages/SuccesPage.vue';
import FeedPage from './pages/FeedPage.vue';

const router = createRouter({
	history: createWebHistory(),
	routes:[
	{ path: '/', component: FeedPage },
	{ path: '/login', component: LoginPage },
	{ path: '/newaccount', component: NewAccount },
	{ path: '/usercreated', component: SuccesPage }
	]
});

export default router