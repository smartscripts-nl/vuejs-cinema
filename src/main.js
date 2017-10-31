import Vue from 'vue';
import './style.scss';

import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

new Vue({

	el: '#app',

	data: {
		//arrays for filters (contains only activated filters):
		genre: [],
		time: [],

		movies: []
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
