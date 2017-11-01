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

new Vue({

	el: '#app',

	data: {
		//arrays for filters (contains only activated filters):
		genre: [],
		time: [],

		movies: [],

		moment,
		day: moment()
	},

	methods: {
		/**
		* @param category Can either be 'genre' or 'time'
		*/
		checkFilter(category, title, checked) {

			if (checked) {
				this[category].push(title);
			}

			//remove item from active filters:
			else {
				let index = this[category].indexOf(title);

				if (index > -1) {
					this[category].splice(index, 1);
				}
			}
		}
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
	}
});
