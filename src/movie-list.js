module.exports = {
	template: `<div id="movie-list">
		<div v-for="movie in movies" class="movie">{{ movie.title }}</div>
	</div>`,

	data () {
		return {
			movies: [
				{title: 'Pulp Fiction', genre: genres.CRIME},
				{title: 'Home Alone', genre: genres.COMEDY},
				{title: 'Austin Powers', genre: genres.COMEDY}
			]
		};
	},

	props: [
		'genre',
		'time'
	]
};
