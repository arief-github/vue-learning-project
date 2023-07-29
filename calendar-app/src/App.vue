<template>
  <CalendarWeek/>    
  <CalendarEntry/>   
</template>

<script>
import CalendarEntry from './components/CalendarEntry.vue';
import CalendarWeek from './components/CalendarWeek.vue';

export default {
    name: "App",
    components: { CalendarEntry, CalendarWeek }
}
</script>

