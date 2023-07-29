<template>
      <div id="app">
        <div class="notes-section">
            <div class="columns">
                <div class="column has-text-centered">
                    <strong>Notes</strong>
                    <div v-for="note in notes" class="notes">
                        {{ note }}
                    </div>
                </div>
                <div class="column has-text-centered">
                    <strong>Timestamp</strong>
                    <div v-for="timestamp in timestamps" class="timestamps">
                        {{ timestamp }}
                    </div>
                </div>
            </div>
            <InputComponent></InputComponent>
            <NoteCountComponent></NoteCountComponent> 
        </div>
    </div>
</template>

<script>
import InputComponent from './components/InputComponent.vue';
import NoteCountComponent from './components/NoteCountComponent.vue';

export default {
  computed: {
    notes() {
      return this.$store.getters.getNotes;
    },
    timestamps() {
      return this.$store.getters.getTimeStamps;
    }
  },
  components: {
   InputComponent,
   NoteCountComponent
  },
}

</script>

<style scoped>

  html, body {
    height: 100%;
  }
  
  #app {
    height: inherit;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
  }
  
  .notes-section {
    width: 500px;
  }
  
  .columns {
    width: 100%;
  }
  
  .notes, .timestamps {
    padding: 5px 0px;
  }

</style>