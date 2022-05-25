<template>
    <button @click="isModalOpen = true" class="button-56">Add User</button>
    <Teleport to="#modal">
      <Transition>
        <div class="modal-bg" v-if="isModalOpen">
          <div class="modal-body-custom" ref="modal">
            <button @click="isModalOpen = false" class="close-btn">x</button>
                <FormKit type="form" v-model="formData" submit-label="Save" @submit="create">
                  <FormKit
                            type="text"
                            name="Title"
                            label="Your Title"
                            placeholder="Mrs"
                            help="Best selling title"
                            validation="required"
                            />
                    <div class="double">
                        <FormKit
                            type="text"
                            name="FirstName"
                            label="Your Forname"
                            placeholder="Jane"
                            help="What do people call you?"
                            validation="required"
                            />
                         <FormKit
                            type="text"
                            name="LastName"
                            label="Your Surname"
                            placeholder="Doe"
                            help="What do people call you?"
                            validation="required"
                            />
                    </div>
                    <FormKit
                        formkit-fieldset='remove-margin'
                        type="text"
                        name="Email"
                        label="Your email"
                        placeholder="jane@example.com"
                        help="What email should we use?"
                        validation="required|email"
                    />
                    <FormKit
                        name="Role"
                        label="Role"
                        help="Storm Trooper or Ice Cream?"
                        type="radio"
                        value="User"
                        :options="['Admin', 'User']"
                    />
                    <div class="double">
                         <FormKit
                            type="password"
                            name="Password"
                            label="Password"
                            validation="required|length:6|matches:/[^a-zA-Z]/"
                            :validation-messages="{
                            matches: 'Please include at least one symbol',
                            }"
                            placeholder="Your password"
                            help="Choose an account password"
                        />
                        <FormKit
                            type="password"
                            name="ConfirmPassword"
                            label="Confirm password"
                            placeholder="Confirm password"
                            validation="required|confirm:Password"
                            help="Choose an account password"
                        />
                    </div>
                </FormKit>
          </div>
        </div>
      </Transition>
    </Teleport>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { ref, toRaw } from 'vue'
import { onClickOutside } from '@vueuse/core'

const modal = ref(null)
const isModalOpen = ref(false)
const formData = ref({})

onClickOutside(modal, () => (isModalOpen.value = false))
@Options({
  methods: {
    create () {
      const userObj = toRaw(formData.value)
      this.$emit('createUser', userObj)
      isModalOpen.value = false
    }
  },
  data () {
    return {
      isModalOpen,
      modal,
      formData
    }
  }
})

export default class CreateUser extends Vue {

}
</script>

<style scoped>

.double {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-body-custom {
  color: #6d335c;
  position: relative;
  background: rgb(240, 236, 236);
  padding: 20px 40px;
  border-radius: 5px;
  box-shadow: 0px 10px 5px 2px rgba(0,0,0,0.1);
}
.modal-body-custom .close-btn{
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
}
.v-enter-active, .v-leave-active {
  transition: all 0,25s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
.button-56 {
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-56:after {
  background-color: #111;
  border-radius: 8px;
  content: "";
  display: block;
  height: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(8px, 8px);
  transition: transform .2s ease-out;
  z-index: -1;
}

.button-56:hover:after {
  transform: translate(0, 0);
}

.button-56:active {
  background-color: #ffdeda;
  outline: 0;
}

.button-56:hover {
  outline: 0;
}

@media (min-width: 768px) {
  .button-56 {
    padding: 0 40px;
  }
}
</style>
