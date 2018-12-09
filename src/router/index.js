import Vue from 'vue'
import Router from 'vue-router'
import Find from '../components/pages/Find/Find.vue'
import My from '../components/pages/My/My.vue'
import Login from '../components/pages/Login/Login.vue'
import Reg from '../components/pages/Login/Reg.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Find',
      component: Find
    },
     {
      path: '/Find',
      name: 'Find',
      component: Find
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
     {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    }
  ]
})
