import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'

import Portfolio from '../components/Portfolio.vue'
import PleasureIsland from '../components/PleasureIsland.vue'
import MandalayBay from '../components/MandalayBay.vue'
import Seaside from '../components/Seaside.vue'
import Sundial from '../components/Sundial.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/pleasureIsland',
      name: 'PleasureIsland',
      component: PleasureIsland
    },
    {
      path: '/mandalayBay',
      name: 'MandalayBay',
      component: MandalayBay
    },
    {
      path: '/seaside',
      name: 'Seaside',
      component: Seaside
    },
    {
      path: '/sundial',
      name: 'Sundial',
      component: Sundial
    },

  ],
  mode: "history"
})
