<template>
  <div>
    <h1>Create A User</h1>
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
        <tr>
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
import ListUser from '@/components/ListUser'
  export default {
      data () {
        return {
          errors: [],
          users: {
            name: '',
            job: '',
          },
          newUser: [],
        }
  },
  mounted () {
    if (localStorage.usertoken) {
      console.log(localStorage.usertoken);
      this.$emit('authenticated', true);
      this.$router.replace({ name: 'list-user'});
    }
  },
  methods: {
    addUser: async function() {
      let {status} = await axios.post('https://reqres.in/api/users?per_page=999999', {
        body: this.users
      })
      .then((response) => {
        this.newUser = response.data
        console.log(this.newUser)
      })
      .catch(e => {
        this.errors.push(e)
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