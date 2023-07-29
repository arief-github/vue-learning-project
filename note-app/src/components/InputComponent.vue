<template>
    <input placeholder="Enter a Note" 
        v-model="input"
        class="input is-small"
        @keyup.enter="monitorEnterKey" 
        type="text"/>
</template>

<script>
    export default {
        data() {
            return {
                input: ''
            }
        },
        methods: {
            monitorEnterKey() {
                this.$store.dispatch('addNote', this.input);
                this.$store.dispatch('addTimeStamp', new Date().toLocaleString());
                this.input = "";
            }
        }
    }
</script>