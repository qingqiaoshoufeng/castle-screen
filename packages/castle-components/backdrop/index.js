import { withInstall } from '../../utils/install'
import '@castle-screen/theme-chalk/dist/css/backdrop.css'
import Backdrop from './src/index.vue'
Backdrop.name = 'caBackdrop'
export const caBackdrop = withInstall(Backdrop)
export default caBackdrop
export * from './src/index.vue'