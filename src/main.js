import { createApp } from 'vue'
import './style/style.scss'
import App from './App.vue'

//Import Bootstrap
import * as bootstrap from 'bootstrap'

import { router } from './router'

createApp(App).use(router).mount('#app')
