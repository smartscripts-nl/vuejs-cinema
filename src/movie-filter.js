import genres from './util/genres';
import checkfilter from './check-filter';

module.exports = {
	data () {
		return {
			genres
		}
	},
	methods: {
		checkFilter (category, title, checked) {
			this.$emit('check-filter', category, title, checked);
		}
	},
	template: `<div id="movie-filter">
		<h2>Filter results</h2>
		<div class="filter-group">
			<check-filter v-for="genre in genres" :title="genre" @check-filter="checkFilter" :key="genre.toUpperCase()"></check-filter>
		</div>
	</div>`,

	components: {
		'check-filter': checkfilter
	}
};
