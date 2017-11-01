<template>
    <div v-bind:class="{ 'check-filter': true, active: checked }" @click="busEmit('CheckFilter')">
        <span class="checkbox"></span>
        <span class="check-filter-title">{{ title }}</span>
    </div>
</template>

<script>
    import { busEvents } from '../util/bus';

    export default {

        data() {
            return {
                checked: false,
                context: 'from CheckFilter.vue @ ',
                emitter: ''
            }
        },

        props: [ 'title', 'category' ],

        methods: {

            // =========== MEDIATOR FOR BUS EVENTS =======

            /**
            * The mediator for all methods that must emit a global bus event
            */
            busEmit (currentMethod) {
                this.emitter = currentMethod;
                this[currentMethod]();
            },

            //=========== CUSTOM EVENT EMITTERS ============

            CheckFilter() {

                this.checked = !this.checked;

                //this.emitter is de facto the current method CheckFilter() - this prop has been set by the mediating busEmit():
                busEvents.emit(this, this.emitter,
                    this.category, this.title, this.checked,
                   //to preserve some context-info, even when using the global event bus:
                   this.context + this.emitter + '()'
                );
            },
        }
    }
</script>
