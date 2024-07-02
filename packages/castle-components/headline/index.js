import { withInstall } from '../../utils/install'
// import '../../theme-chalk/src/headline.scss'
import '@castle-screen/theme-chalk/dist/css/headline.css'
import Headline from './src/index.vue'
Headline.name = 'caHeadline'
export const caHeadline = withInstall(Headline)
export default caHeadline
export * from './src/index.vue'