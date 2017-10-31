import Vue from 'vue';
import './style.scss';
import movielist from './movie-list';
import moviefilter from './movie-filter';

new Vue({

	el: '#app',

	data: {

		//arrays for filters (contains only activated filters):
		genre: [],
		time: []
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
		'movie-list': movielist,

		//can send check-filter event:
		'movie-filter': moviefilter
	}
});
