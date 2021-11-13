import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import LoginRedirect from '@/views/LoginRedirect.vue'
import Home from '@/views/Home.vue'
import EnterInfo from '@/views/EnterInfo.vue'
import FindMiddle from '@/views/FindMiddle.vue'
import FindPlace from '@/views/FindPlace.vue'
import MakeAppointment from '@/views/MakeAppointment.vue'
import OneClick from '@/views/OneClick.vue'
import NotFound from '@/views/NotFound.vue'
import authApi from '@/api/auth.js'
import store from "@/store"


Vue.use(VueRouter)

const checkToken =  () => async (to, from, next) => {
  if (from.name !== 'LoginRedirect') {
    const userId = store.getters.getUserId
    const isExpired = await authApi.check(userId)
    if (isExpired) {
      const response = await authApi.logout(userId)
      if (response == 'success') {
        await store.dispatch('removeUser')
        sessionStorage.clear()
        next('/')
      }
    }
    else {
      return next()
    }
  }
  return next()
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/oauth/kakao/callback',
    name: 'LoginRedirect',
    component: LoginRedirect
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: checkToken()
  },
  {
    path: '/enterinfo',
    name: 'EnterInfo',
    component: EnterInfo,
    beforeEnter: checkToken()
  },
  {
    path: '/findmiddle',
    name: 'FindMiddle',
    component: FindMiddle,
    beforeEnter: checkToken()
  },
  {
    path: '/findplace',
    name: 'FindPlace',
    component: FindPlace,
    beforeEnter: checkToken()
  },
  {
    path: '/makeappointment/:secretCode',
    name: 'MakeAppointment',
    component: MakeAppointment,
     beforeEnter: checkToken()
  },
  {
    path: '/oneclick',
    name: 'OneClick',
    component: OneClick,
    beforeEnter: checkToken()
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  { path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
