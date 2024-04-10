import {createApp} from 'vue';
import App from './app.vue'
import {caDemo} from '@caslte-screen/caslte-components'
const app = createApp(App)
app.use(caDemo)
app.mount('#app') 