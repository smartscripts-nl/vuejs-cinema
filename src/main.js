import Vue from 'vue';
import './style.scss';

import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

//import Moment.js with timezone enhancements:
import moment from 'moment-timezone';

//override default timezone of the browser:
moment.tz.setDefault('UTC');

//add it as a property to the root instance, to make it available in the sub-components (assign it to the moment-property in the data and call it as this.$moment):
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment; } });

//import eventhandlers for events emitted through the bus:
import { checkFilter } from './util/bus';

//initialize a global "event bus", to pass around events more easily (watch out, it also has to be added to the data prop of the root Vue instance!):
const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus; } });

new Vue({

	el: '#app',

	data: {
		//arrays for filters (contains only activated filters):
		genre: [],
		time: [],

		movies: [],

		moment,
		day: moment(),

		bus
	},

	components: {

		//movie-list must have props to receive the state of the genre and time filters (arrays):
		MovieList,

		//can send check-filter event; payload to be stored in the genre and time arrays:
		MovieFilter
	},

	created() {
		this.$http.get('/api').then(response => {
			this.movies = response.data;
		});

		//bind(this) to make this Vue root instance available to the imported checkFilter event handler:
		this.$bus.$on('check-filter', checkFilter.bind(this));
	}
});
