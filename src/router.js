import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Index.vue'
import Complain from './views/Complain.vue'
import CreateOrder from './views/CreateOrder.vue'
import Refund from './views/Refund.vue'
import Login from './views/login/Login.vue'
import LoginMessage from './views/login/LoginMessage.vue'
import LoginWechat from './views/login/LoginWechat.vue'
import MessageVerification from './views/login/MessageVerification.vue'
import MyAbout from './views/my/About.vue'
import MyCoupon from './views/my/Coupon.vue'
import MyFeedback from './views/my/Feedback.vue'




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
      path: '/login/loginWechat',
      name: 'loginWechat',
      component: LoginWechat
    },
    {
      path: '/login/messageVerification',
      name: 'messageVerification',
      component: MessageVerification
    },
    {
      path: '/my/about',
      name: 'myAbout',
      component: MyAbout
    },
    {
      path: '/my/coupon',
      name: 'coupon',
      component: MyCoupon
    },
    {
      path: '/my/feedback',
      name: 'feedback',
      component: MyFeedback
    },
  ]
})
