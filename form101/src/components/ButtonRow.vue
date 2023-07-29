<template>
    <button 
        @click="onButtonClick" 
        class="ui button" 
        name="button-hoodie"
        value="fullstack-hoodie">
        Hoodie
    </button>
    <button 
        @click="onButtonClick" 
        class="ui button" 
        name="button-tee"
        value="fullstack-tee">
        Tee
    </button>
    <button 
        @click="onButtonClick" 
        class="ui button" 
        name="button-fitted-cap"
        value="fullstack-fitted-cap">
        Fitted Cap
    </button>
    <button 
        @click="onButtonClick" 
        class="ui button" 
        name="button-jacket"
        value="fullstack-jacket">
        Jacket
    </button>
</template>
<script >
    export default {
        name: 'ButtonRow',
        methods: {
            onButtonClick(evt) {
                const button = evt.target;
                console.log(`The User Clicked ${button.name} : ${button.value}`);
            }
        }
    }
</script>