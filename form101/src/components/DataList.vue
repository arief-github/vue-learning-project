<template>
    <div class="ui segment">
        <h4 class="ui header">Items</h4>
        <ul>
            <div v-if="loading" class="ui active inline loader"></div>
            <li v-for="item in items" v-bind:key="item.id">{{ item }}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'DataList',
        props: ['items', 'loading']
    }
</script>