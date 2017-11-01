import Vue from 'vue';

//================ THE GLOBAL EVENT BUS ===========

//this one only will be executed once:

const bus = new Vue();

//initialize a global "event bus", to pass around events more easily (watch out, it also has to be added to the data prop of the root Vue instance!):
Object.defineProperty(Vue.prototype, '$bus', { get() { return bus; } });

let busEventhandlers = {

	eventhandlerAssignments: {

		/**bind(rootInstance) to make this Vue root instance available to the imported event handler:

		Called like so (for example in created() method of module) for main module main.js:
		busEventhandlers.assign(this, 'main');

		* Called from @see assign
		*/
		main: rootInstance => {
			rootInstance.$bus.$on('check-filter', busEventhandlers.checkFilter.bind(rootInstance));
		}
	},

	assign (rootInstance, component) {
		this.eventhandlerAssignments[component](rootInstance);
	},

	//=============== GLOBAL BUS EVENTHANDLERS ========

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
};

export { busEventhandlers };

