<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-9"></div>
            <!-- <div class="col-xl-2">
                <router-link to="/create-user" class="btn btn-primary">Create</router-link>
            </div> -->
        </div>
        <paginate name="users" :list="users" class="pagination">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Email</th>
                    <th>name</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>avatar</th>
                    <th>details</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in paginated('users')" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.first_name }}</td>
                    <td>{{ user.last_name }}</td>
                    <td>{{ user.avatar }}</td>
                    <!-- <td><button class="btn btn-danger" @click="change(user.id)"> Details</button></td> -->
                    <td><router-link :to="{name: 'users-user-detail', params: { id: user.id }}" class="btn btn-success">Details</router-link></td>
                    <td><router-link :to="{name: 'user-edit', params: { id: user.id }}" class="btn btn-warning">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteUser(user.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
        </paginate>
        <paginate-links for="users" :show-step-links="true"></paginate-links>
    </div>
</template>
<script>
import axios from 'axios'
import { async } from 'q';
import UserDetail from './UserDetail';
import router from '../router/index';
export default {
  components: {
    UserDetail,
  },
  data () {
    return {
      users: [],
      olduser: {
        name: '',
        job: '',
      },
      userDetail: {},
      paginate: ['users'],
      errors: [],
    }
  },
  methods: {
    deleteUser: async function (userId) {
      let {status} = await axios.delete('https://reqres.in/api/users/' + userId)
      if (status === 204) {
        let userIndex = this.users.findIndex(r => r.id === userId)
        this.users.splice(userIndex, 1)
      } else {
        console.log('error!')
      }
    },
  },
  mounted () {
    if (localStorage.tokenID) {
        this.$emit('authenticated', true);
        this.$router.replace({ name: 'list-user'});
    }
    axios.get('https://reqres.in/api/users?per_page=999999')
      .then((response) => {
        this.users = response.data.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
<style>
ul.paginatie-links.users {
  display:block;
  list-style-type:none;
}
ul.paginate-links.users li {
  display: inline-block;
  margin: 0 10px;
  color: chartreuse;
  font-size:7mm;
}
</style>
