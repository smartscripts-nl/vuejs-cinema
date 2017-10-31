module.exports = {
	data () {
		return {
			checked: false
		}
	},
	methods: {
		checkFilter () {
			this.checked = !this.checked;
			this.$emit('check-filter', 'genre', this.title, this.checked);
		}
	},
	template: `<div :class="{ 'check-filter': true, active: checked }" @click="checkFilter">
		<span class="checkbox"></span>
		<span class="check-filter-title">{{ title }}</span>
	</div>`,
	props: [ 'title' ]
};
