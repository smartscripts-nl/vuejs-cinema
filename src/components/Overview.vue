<template>
	<div id="overview">
        <div class="main">
            <movie-list :genre="genre" :time="time" :movies="movies" :day="day"></movie-list>
            <movie-filter></movie-filter>
        </div>
    </div>
</template>

<script>
	import MovieList from './MovieList.vue';
	import MovieFilter from './MovieFilter.vue';

	export default {

		props: ['genre', 'time', 'movies', 'day'],

		components: {

			//movie-list must have props to receive the state of the genre and time filters (arrays):
			MovieList,

			//can send check-filter event; payload to be stored in the genre and time arrays:
			MovieFilter
		}
	};
</script>