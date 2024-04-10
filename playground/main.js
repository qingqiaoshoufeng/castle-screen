import {createApp} from 'vue';
import App from './app.vue'
import {caDemo} from '@caslte-screen/caslte-components'
// import aaa from '../packages/caslte-components/demo/src/demo.vue'
console.log(caDemo,3333);
const app = createApp(App) // 编写play组件为测试入口
app.use(caDemo)
app.mount('#app') 