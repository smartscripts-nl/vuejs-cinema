<template>
    <div v-bind:class="{ 'check-filter': true, active: checked }" @click="checkFilter">
        <span class="checkbox"></span>
        <span class="check-filter-title">{{ title }}</span>
    </div>
</template>
<script>

    import { busEvents } from '../util/bus';

    export default {
        data() {
            return {
                checked: false
            }
        },
        props: [ 'title', 'category' ],
        methods: {
            checkFilter() {

                this.checked = !this.checked;

                busEvents.emit(this, 'CheckFilter', this.category, this.title, this.checked);
            }
        }
    }
</script>
