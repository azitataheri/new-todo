import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://vue-app-cb7e2-default-rtdb.europe-west1.firebasedatabase.app'
axios.defaults.timeout = 1000
createApp(App).mount('#app')
