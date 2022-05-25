import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { plugin, defaultConfig } from '@formkit/vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import '@formkit/themes/genesis'

import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

createApp(App).use(store).use(Toast).use(plugin, defaultConfig).mount('#app')
