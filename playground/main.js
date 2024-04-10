import {createApp} from 'vue';
import App from './app.vue'
import {caDemo} from '@castle-screen/castle-components'
const app = createApp(App)
app.use(caDemo)
app.mount('#app') 