import { withInstall } from '../../utils/install'
import '@castle-screen/theme-chalk/dist/css/demo.css'
import demo from './src/demo.vue'
demo.name = 'caDemo'
export const caDemo = withInstall(demo)
export default caDemo
export * from './src/demo.vue'