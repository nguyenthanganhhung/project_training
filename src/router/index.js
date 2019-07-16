import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import HelloWorld from '@/components/HelloWorld'
import ListUser from '@/components/ListUser'
import CreateUser from '@/components/CreateUser'
import userDetail from '@/components/userDetail'
import VuePaginate from 'vue-paginate'
import updateUser from '@/components/updateUser'

Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(VuePaginate)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/listUser',
      component: ListUser
    },
    {
      path: '/create_user',
      name: 'users.create',
      component: CreateUser
    },
    // {
    //   path: '/userDetail',
    //   name: 'users.userDetail',
    //   component: userDetail
    // },
    {
      path: '/userDetail/:id',
      name: 'users.userDetail',
      component: userDetail
    },
    {
      path: '/updateUser/:id',
      name: 'users.update',
      component: updateUser
    }
  ]
})
