import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/index'
import elementLayout from '../pages/elementLayout/index.vue'
import testParam from '../pages/routerParamsTest/index.vue'
import page from '../pages/page/index.vue'
import media from '../pages/media/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/elementLayout',
      name: 'elementLayout',
      component: elementLayout
    }, {
      path: '/testParam/list-:AParam-:BParam',
      name: 'testParam',
      component: testParam
    }, {
      path: '/testParam/list-:AParam',
      name: 'testParam1',
      component: testParam
    }, {
      path: '/testParam/',
      name: 'testParam2',
      component: testParam
    }, {
      path: '/page/',
      name: 'page',
      component: page
    }, {
      path: '/media/',
      name: 'media',
      component: media
    }
  ]
})
