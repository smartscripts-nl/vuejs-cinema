import Vue from 'vue';

//================ THE GLOBAL EVENT BUS ===========

const bus = new Vue();

function initBus () {

	//initialize a global "event bus", to pass around events more easily (watch out, it also has to be added to the data prop of the root Vue instance!):
	Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus; } });
}


//=============== GLOBAL BUS EVENTHANDLERS ========

/**
* @param category Can either be 'genre' or 'time'
*/
function checkFilter(category, title, checked) {

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

export { bus, checkFilter, initBus };
