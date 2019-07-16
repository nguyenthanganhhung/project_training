<template>
  <div>
    <h1>Create A User</h1>
    {{ userID }}
    <form @submit.prevent="addUser" class="ap1">
      <div>
          <div class="row">
            <label>name:</label>
            <input type="text" class="form-control" v-model="users.name">
          </div>
          <br />
          <div class="row">
            <label>Job:</label>
            <input type="text" class="form-control" v-model="users.job">
          </div>
      </div><br />
      <div class="form-group">
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
    <table class="table table-striped table-hover">
      <thead>
      <tr>
          <th>id</th>
          <th>name</th>
          <th>job</th>
          <th>createAt</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="user in newUser" :key="user.id">
          <td>{{ newUser.id }}</td>
          <td>{{ newUser.body.name }}</td>
          <td>{{ newUser.body.job }}</td>
          <td>{{ newUser.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router/index'
export default {
  data () {
    return {
      errors: [],
      users: {
        name: '',
        job: ''
      },
      userID: null,
      newUser: []
    }
  },
  methods: {
    addUser: async function () {
      await axios.post('https://reqres.in/api/users?per_page=999999', {
        body: this.users
      })
        .then((res) => {
          this.newUser = res.data
          this.userID = this.newUser.id
        })
        .catch(e => {
          this.errors.push(e)
        })
      router.push({
        name: 'users.userDetail',
        params: {
          id: this.userID
        }
      })
    }
  }
}
</script>
<style scoped>
form {
  width:600px;
  margin-left:300px;
}
input {
  width:500px;
}
label {
  width:100px;
}
</style>
