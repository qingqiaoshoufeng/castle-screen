import { withInstall } from '../../utils/install'
import '@castle-screen/theme-chalk/dist/css/empty.css'
import Empty from './src/index.vue'
Empty.name = 'caEmpty'
export const caEmpty = withInstall(Empty)
export default caEmpty
export * from './src/index.vue'