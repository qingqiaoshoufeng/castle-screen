import { withInstall } from '../../utils/install'

import demo from './src/demo.vue'
demo.name = 'caDemo'
export const caDemo = withInstall(demo)
export default caDemo
export * from './src/demo.vue'