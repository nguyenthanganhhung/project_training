<template>
  <form class="container" @submit.prevent="updateProfile">
    <h2>{{ title }}</h2>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Id</label>
      <div class="col-sm-10">
        {{ user.id }}
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        {{ user.email }}
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">First Name</label>
      <div class="col-sm-10">
        {{ user.first_name }}
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Last Name</label>
      <div class="col-sm-10">
        {{ user.last_name }}
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Avata</label>
      <div class="col-sm-10">
        {{ user.avatar }}
      </div>
    </div>
  </form>
</template>
<script>

import axios from 'axios'

export default {
  async mounted () {
    let userId = this.$route.params.id

    try {
      let {data: {data}} = await axios.get('https://reqres.in/api/users/' + userId)
      this.user = data
    } catch (e) {
      console.log(e)
    }
  },
  data () {
    return {
      user: null
    }
  }
}
</script>
