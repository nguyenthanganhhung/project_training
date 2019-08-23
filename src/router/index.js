import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ListUser from '@/components/ListUser'
import CreateUser from '@/components/CreateUser'
import UserDetail from '@/components/userDetail'
import VuePaginate from 'vue-paginate'
import Master from '@/components/Master'
import Vuex from 'vuex'
import UserEdit from '@/components/UserEdit'
import FormLogin from '@/components/FormLogin'
import bootstrapvue from 'bootstrap-vue'
import LearnCss from '@/components/LearnCss'

Vue.use(Router)
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(VuePaginate)
Vue.use(bootstrapvue)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/list-user',
      name: 'list-user',
      component: ListUser
    },
    {
      path: '/create-user',
      name: 'users-create',
      component: CreateUser
    },
    // {
    //   path: '/userDetail',
    //   name: 'users.userDetail',
    //   component: userDetail
    // },
    {
      path: '/user-detail/:id',
      name: 'users-user-detail',
      component: UserDetail
    },
    {
      path: '/app-todo',
      name: 'app-todo',
      component: Master
    },
    {
      path: '/user-edit/:id',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/login',
      name: 'login',
      component: FormLogin
    },
    {
      path: '/learn-css',
      component: LearnCss
    }
  ]
})
