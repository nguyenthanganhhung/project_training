<template>
    <div>{{user.id}}: {{user.first_name}}</div>
</template>
<script>
import axios from 'axios'
import ListUser from './ListUser';
import router from '../router/index';
export default {
    props: {
        userData: {
            type: String,
            require: true
        }
    },
    components: {
        appuserdetail:ListUser
    },
    async mounted() {
        let userId = this.$route.params.id;

        try {
            let {data: {data}} = await axios.get('https://reqres.in/api/users/' + userId);
            this.user = data;
        } catch(e) {
            console.log(e)
        }
        // .then((response) => {
        //   this.user = response.data.data
        //   console.log(this.userDetail)
        // })
        // .catch(e => {
        //   this.errors.push(e)
        // })
    },
    data() {
        return {
            user: null
        }
    }
}
</script>