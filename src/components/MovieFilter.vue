<template>
	<div id="movie-filter">
		<h2>Filter results</h2>

		<h3>By time of day</h3>
		<div class="filter-group">
			<check-filter v-for="time in times" :title="time" category="time" @check-filter="checkFilter" :key="time.toUpperCase()"></check-filter>
		</div>

		<h3>By genre</h3>
		<div class="filter-group">
			<check-filter v-for="genre in genres" :title="genre" category="genre" @check-filter="checkFilter" :key="genre.toUpperCase()"></check-filter>
		</div>
	</div>
</template>

<script>
	import genres from '../util/genres';
	import times from '../util/times';
	import CheckFilter from './CheckFilter.vue';

	export default {
		data () {
			return {
				genres,
				times
			}
		},
		methods: {
			checkFilter (category, title, checked) {
				this.$emit('check-filter', category, title, checked);
			}
		},

		components: {
			CheckFilter
		}
	};
</script>
