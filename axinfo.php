<?php

class AxInfo {

	/**
	* Extend basic HTML elements to encapsulate reusable code
	* Vue.component('my-component', {
	* 	template: '<div>{{ msg }}</div>',
	* 	data() {
	* 		msg: 'A custom component'
	* 	}
	* });
	*
	* And in HTML: <my-component></my-component>
	*
	* components are a kind of mini instances of Vue with their own properties, methods etc, isolated to that component.
	*
	* You can define custom components within custom components, using the components attribute. BUT then you have to give this sub-components a data METHOD that returns the data, not a data object like for the main Vue instance!
	*/
	function AX_CUSTOM_COMPONENTS() {}

	/**
	* Using (static) props of a parent component:
	* the parent HTML element has to have a prop [somedata]="".
	* the child component can than reference this prop in an array in a props attribute: Vue.component('my-component', {
	* 	template: '',
	* 	props: ['somedata']
	* });
	*
	* Binding to dynamic data (when parent changes the data, child receives the change):
	* <my-component v-bind:somedata="parentdata"></my-component>
	* Watch out: child components can only receive changes, they can't change the data of the parent. It's a one way data flow.
	*
	* SENDING DATA TO PARENT WITH CUSTOM EVENTS
	*
	* Vue.component('my-component', {
	* 	template: '<div @click="emitEvent'></div>',
	* 	methods: {
	* 		emitEvent() {
	* 			this.$emit('customevent', 'From the child');
	* 		}
	* 	}
	* });
	*
	* In the parent, for handling these custom events we have to add a handler:
	* <my-component @custom-event="eventHandler"></my-component>
	*
	* new Vue({
	* 	methods: {eventHandler(msg) {}}
	* })
	*/
	function AX_CHILD_COMPONENTS() {}
}
