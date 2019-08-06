<template>
  <div class="container">
    <b-form @submit="login" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
        {{ email }}
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="password"
          required
          placeholder="Enter Password"
        ></b-form-input>
        {{ password }}
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
import { constants } from 'fs';
import { async } from 'q';
import { mapFields } from 'vuex-map-fields'

  export default {
    data() {
      return {
        show: true,
        email: '',
        password: ''
      }
    },
    computed: {
      ...mapFields([
        'form.email',
        'form.password'
      ])
    },
    async mounted () {
      if (localStorage.usertoken) {
        console.log(localStorage.usertoken);
        this.$emit('authenticated', true);
        this.$router.replace({ name: 'list-user'});
      }
    },
    watch:{
      users(newtoken) {
        localStorage.token = newtoken;
      }
    },
    methods: {
      ...mapActions([
        'onSubmit'
      ]),
      login() {
        this.onSubmit({
          email: this.email,
          password: this.password
        })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.email = ''
        this.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>