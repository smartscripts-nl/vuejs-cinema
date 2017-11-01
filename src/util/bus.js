import Vue from 'vue';

//================ THE GLOBAL EVENT BUS ===========

//this one only will be executed once:

const bus = new Vue();

//initialize a global "event bus", to pass around events more easily (watch out, it also has to be added to the data prop of the root Vue instance!):
Object.defineProperty(Vue.prototype, '$bus', { get() { return bus; } });

let busEventhandlers = {

	//=============== GLOBAL BUS EVENTHANDLERS ========

	/**
	* @param category Can either be 'genre' or 'time'
	*/
	checkFilterEvent(component, emitOrHandle) {

		/**
		* Called from CheckFilter.vue:
		* busEventhandlers.checkFilter(this, 'emit');
		*/
		if (emitOrHandle === 'emit') {

			bus.$emit('check-filter', component.category, component.title, component.checked);
		}

		/**bind(component) to make the Vue root instance available to the imported event handler:

		Called like so (for example in created() method of module) for main module main.js:
		busEventhandlers.assign(this, 'main');

		* Called from main.js:
		* busEventhandlers.checkFilter(this, 'handle');
		*/
		else {

			bus.$on('check-filter',
				this.checkFilterHandle
				.bind(component)
			);
		}
	},

	checkFilterHandle(category, title, checked) {

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
};

export { busEventhandlers };
