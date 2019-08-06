<template>
  <form class="container" @submit.prevent="updateProfile">
    <h2>{{ title }}</h2>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input class="form-control" v-model="user.email">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">First Name</label>
      <div class="col-sm-10">
        <input class="form-control" v-model="user.first_name">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Last Name</label>
      <div class="col-sm-10">
        <input class="form-control" v-model="user.last_name">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Avata</label>
      <div class="col-sm-10">
        <input class="form-control" v-model="user.avatar">
      </div>
    </div>
    <button class="btn btn-warning">Update profile</button>
    <router-link to="/users" class="btn btn-danger">Cancel</router-link>
  </form>
</template>

<script>

import axios from 'axios'
import router from '../router/index'

export default {
  data () {
    return {
      title: 'User edit',
      user: {
        email: '',
        first_name: '',
        last_name: '',
        avata: ''
      },
      userID: null,
      errors: []
    }
  },
  async mounted () {
    if (localStorage.tokenID) {
      this.$emit('authenticated', true);
      this.$router.replace({ name: 'list-user'});
    }
    let userId = this.$route.params.id
    try {
      let {data: {data}} = await axios.get('https://reqres.in/api/users/' + userId)
      this.user = data
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    updateProfile: async function (userId) {
      await axios.patch('https://reqres.in/api/users/' + userId, {
        body: this.user
      })
        .then((res) => {
          this.userID = res.data.body.id
        })
        .catch(e => {
          this.errors.push(e)
        })
      router.push({
        name: 'users-user-detail',
        params: {
          id: this.userID
        }
      })
    }
  }
}
</script>
