<template>
  <div id="app" class="ui container">
    <h2 class="ui header">What's your favorite Fullstack clothing item?</h2>
    <button-row></button-row>
    <br/>
    <h2 class="ui header">Fullstack Inquiry Sheet</h2>    
    <input-form></input-form>
  </div>

</template>

<script>
import ButtonRow from './components/ButtonRow.vue';
import InputForm from './components/InputForm.vue';

export default {
  name: 'App',
  components: {
    'button-row' : ButtonRow,
    'input-form': InputForm
  }
}
</script>

<style>
.ui.container {
  margin: 20px 0;
}
</style>
