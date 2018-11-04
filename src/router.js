import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Index.vue'
import Complain from './views/Complain.vue'
import CreateOrder from './views/CreateOrder.vue'
import Refund from './views/Refund.vue'
import Login from './views/login/Login.vue'
import LoginMessage from './views/login/LoginMessage.vue'
import MessageVerification from './views/login/MessageVerification.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/complain',
      name: 'complain',
      component: Complain
    },
    {
      path: '/createOrder',
      name: 'createOrder',
      component: CreateOrder
    },
    {
      path: '/refund',
      name: 'refund',
      component: Refund
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/login/loginMessage',
      name: 'loginMessage',
      component: LoginMessage
    },
    {
      path: '/login/messageVerification',
      name: 'messageVerification',
      component: MessageVerification
    },
  ]
})
