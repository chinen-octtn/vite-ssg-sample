import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import Top from './Top.vue'
import Page1 from './Page1.vue'
import { RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Top },
  { path: '/page1/', component: Page1 },
]

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes }
)



