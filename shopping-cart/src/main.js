import { createApp } from 'vue'
import '../node_modules/bulma/css/bulma.min.css'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')
