<template>
    <div class="note-count">Note count: <strong>{{ noteCount }}</strong></div>
</template>
<script>
    export default {
        computed: {
            noteCount() {
                return this.$store.getters.getNoteCount;
            }
        }
    }
</script>
<style scoped>
    .note-count {
        margin-top: 48px;
    }
</style>
