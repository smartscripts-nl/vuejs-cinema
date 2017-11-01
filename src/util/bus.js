import Vue from 'vue';

//================ THE GLOBAL EVENT BUS ===========

//this one only will be executed once:

const bus = new Vue();

//initialize a global "event bus", to pass around events more easily (watch out, it also has to be added to the data prop of the root Vue instance!):
Object.defineProperty(Vue.prototype, '$bus', { get() { return bus; } });

const busEvents = {

	//=============== GLOBAL BUS EVENTHANDLER MEDIATORS ========

	/**
	* @param component
	* @param eventName
	* @param args Optional, context dependent
	*
	* Example call (extra arguments args are optional and context dependent):
	* busEvents.emit(this, 'CheckFilter', this.category, this.title, this.checked);
	*/
	emit(component, eventName, ...args) {
		bus.$emit(eventName, ...args);
	},

	/**:
	* Example call:
	* busEvents.handle(this, 'CheckFilter');
	*/
	handle(component, eventName) {

		bus.$on(eventName,

			//execute the eventhandler:
			this['on' + eventName]

			//to make the Vue root or component instance available to the imported event handler:
			.bind(component)
		);
	},



	// =================== CUSTOM EVENTHANDLERS =====

	/**
	* Handle clicks on the filters for categories and times
	*
	* The part after "on" is the name of the event thas was emitted.
	*/
	onCheckFilter(category, title, checked) {

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

export { busEvents };
