import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css';

library.add(fas);

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia());
app.use(ToastPlugin, {
    position: 'top-right'
});
app.use(router);

app.mount('#app');
