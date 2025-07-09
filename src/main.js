import './assets/main.css'

import { createApp } from 'vue'
import { createPinia, setActivePinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css';
import 'alpinejs';
import { useAuthStore } from './stores/auth'

library.add(fas);

const app = createApp(App)
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(ToastPlugin, {
    position: 'top-right'
});
const authStore = useAuthStore();
authStore.loadAuthUser();
router.beforeEach((to, from) => {
    if(to.meta.hasAuth && !authStore.token)
        return { name: 'login'}
    else if(to.meta.autoLogin && authStore.token)
        return {name: 'dashboard'}
});

app.mount('#app');
