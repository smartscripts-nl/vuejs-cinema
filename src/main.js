import Vue from 'vue';
import './style.scss';

import VueResource from 'vue-resource';
Vue.use(VueResource);

//import Moment.js with timezone enhancements:
import moment from 'moment-timezone';

//override default timezone of the browser:
moment.tz.setDefault('UTC');

//add it as a property to the root instance, to make it available in the sub-components (assign it to the moment-property in the data and call it as this.$moment):
Object.defineProperty(Vue.prototype, '$moment', { get() { return moment; } });

//init the global event bus + import eventhandlers for events emitted through this bus:
import { busEvents } from './util/bus';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './util/routes';
const router = new VueRouter({
	routes
});

new Vue({

	el: '#app',

	data: {
		//arrays for filters (contains only activated filters):
		genre: [],
		time: [],

		movies: [],

		day: moment()
	},

	router,

	created() {
		this.$http.get('/api').then(response => {
			this.movies = response.data;
		});

		busEvents.handle(this, 'CheckFilter');
	}
});
