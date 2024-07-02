import {createApp} from 'vue';
import App from './app.vue'
import {caDemo} from '@castle-screen/castle-components'
<<<<<<< Updated upstream
=======
import {castleCardFrame} from '@castle-screen/castle-card-frame'
import './assets/base.scss'
>>>>>>> Stashed changes
const app = createApp(App)
app.use(caDemo)
app.mount('#app') 