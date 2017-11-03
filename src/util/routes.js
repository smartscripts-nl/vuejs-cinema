import Overview from '../components/Overview.vue';
import Detail from '../components/Detail.vue';

export default [
	{ path: '/', component: Overview, name: 'home' },
	{ path: '/movie/:id', component: Detail, name: 'movie' },

	//catch-all: redirect for non existing routes:
	{ path: '*', redirect: 'home' }
];
