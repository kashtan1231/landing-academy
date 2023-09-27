import { createApp } from 'vue'
import App from './App.vue'
import VueCountdown from '@chenfengyuan/vue-countdown'

createApp(App).component(VueCountdown.name, VueCountdown).mount('#app')
