<template>
  <label class="card" for='label'>
    <div class="grid-card-content">
      <div style="width:40px">
        <img v-if="user.role == 'User'" alt="pixel art" src="../assets/user.png">
        <img v-if="user.role == 'Admin'" alt="pixel art" src="../assets/admin.png">
      </div>
      <h2>{{user.title}} {{user.firstName}} {{user.lastName}}
        <span>{{user.role}}</span>
        <span>{{user.email}}</span>
      </h2>
      <button class="delete" @click="this.deleteUser()">x</button>
    </div>
  </label>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
const user = {
  title: null,
  firstName: null,
  lastName: null,
  role: null,
  email: null,
  password: null,
  confirmPassword: null
}

@Options({
  props: {
    user: user
  },
  methods: {
    deleteUser () {
      this.$emit('delete')
    }
  }
})
export default class UserCard extends Vue {
  user!: typeof user
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-card-content{
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  place-items: start;
}
.card{
  background: #ae5f75;
  width: 100%;
  display: block;
  border-bottom: 1px solid #2C3E50;
  color: #fff;
  font-weight: 900;
  font-size: 11px;
  letter-spacing: 1px;
  text-indent: 20px;
  transition: all 0.7s ease;
  position: relative;
  padding: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
label h2 span{
  display: block;
  font-size: 12px;
  text-transform: capitalize;
  font-weight: normal;
  color: #f6bd66;
}
h2{
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.card:hover{
  background: #6d335c;
  border-bottom: 1px solid #34495E;
  color: #d37b79;
}
.card:hover span{
  color: #f6bd66;
}
img{
  width: 30px;
  position: relative;
  top: 15px;
  right: 10px;
}
.delete{
  border: none;
  background: none;
  color: white;
  font-size: 1.2rem;
  align-self: baseline;
  width: -webkit-fill-available;
}
</style>
