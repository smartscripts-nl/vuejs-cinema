module.exports = {
	template: `<div id="movie-list">
		<div v-for="movie in movies" class="movie">{{ movie.title }}</div>
	</div>`,

	data () {
		return {
			movies: [
				{title: 'Pulp Fiction'},
				{title: 'Home Alone'},
				{title: 'Austin Powers'}
			]
		};
	}
};
