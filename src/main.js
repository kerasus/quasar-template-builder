import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './test/App.vue'
import store from './store/index'
import quasarUserOptions from './quasar-user-options'

createApp(App)
    .use(store)
    .use(Quasar, quasarUserOptions)
    .mount('#app')
