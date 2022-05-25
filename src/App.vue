<template>
    <div class="users">
        <div style="float:right">
          <CreateUser @createUser="create" />
        </div>
        <h1>AWESOME USERS</h1>
      <div v-if="users.length > 0">
        <UserCard
          v-for="user in users"
          :user="user"
          :key="user.id"
          @delete="this.delete(user.id)" />
      </div>
      <div v-else class="user-warn">
        there are no users
      </div>
    </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'
import CreateUser from '@/components/CreateUser.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { useToast } from 'vue-toastification'
const toast = useToast()

export default {
  name: 'MyHome',
  components: {
    UserCard,
    CreateUser
  },
  data () {
    return {
      loading: false,
      message: ''
    }
  },
  created () {
    this.loadUsers()
  },
  computed: {
    ...mapGetters([
      'users'
    ])
  },
  methods: {
    ...mapActions([
      'loadUsers',
      'deleteUser',
      'createUser'
    ]),
    ...mapMutations([
      'deleteUserId'
    ]),
    async delete (id) {
      try {
        await this.deleteUser(id)
        toast.success('User Successfully Deleted')
      } catch (e) {
        toast.error(e?.response?.data?.message)
      }
    },
    async create (user) {
      try {
        await this.createUser(user)
        toast.success('User Successfully Created')
      } catch (e) {
        toast.error(e?.response?.data?.message)
      }
    }
  }
}
</script>

<style>
 @import "./style.css";
h1{
  color: #aa8e8d;
  text-align: center;
  font-size: 1.8rem !important;
  font-weight: 900;
}
.users {
  width: 320px;
  position: absolute;
  top: 20%;
  left: 0px;
  right: 0px;
  margin: 0px auto;
}
.user-warn {
    color: white;
    font-size: 1.5rem;
    border: 1px solid white;
    border-radius: 5px;
    display: inline-block;
    padding: 10px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
}
</style>
