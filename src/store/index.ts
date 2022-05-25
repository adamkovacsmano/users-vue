import axios from '@/axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },
  getters: {
    users: (state) => state.users
  },
  mutations: {
    deleteUserId (state: {users: any[]}, id) {
      const index = state.users.findIndex(x => x.id === id)
      state.users.splice(index, 1)
    }
  },
  actions: {
    async loadUsers () {
      const { data } = await axios.get('/users')
      this.state.users = data
    },
    async deleteUser ({ state }, id) {
      await axios.delete(`/users/${id}`)
      this.commit('deleteUserId', id)
    },
    async createUser ({ state }, userObj) {
      await axios.post('/users', userObj)

      await this.dispatch('loadUsers')
    }
  },
  modules: {
  }
})
