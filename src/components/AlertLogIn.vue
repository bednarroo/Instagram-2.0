<template  >
  <div class="position-absolute top-0 start-0  w-100 h-100 d-flex flex-column align-items-center justify-content-evenly p-5" style="background-color: #ff00f7ec;">
    <div>
      <h1 class="fw-bolder">Hello!</h1>
  <p class="fw-bolder">You're not loged in. Please log in to see more without any limits!</p>
  <hr class="my-4">
  <p class="fw-bolder">This is {{ props.sreminderNumber }} reminder. When you will see third you won't be able to see anything.</p>
  <div class="d-flex align-items-center" >
    <button  class="btn btn-primary my-5" @click="$emit('hideAlertLogIn')" v-if="showCloseButton">
    I understand
  </button>
  <button class="btn btn-primary my-5" @click="showLogInModal">Log in</button>
  </div>

    </div>
</div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {useUserStore} from '../stores/userDetails.ts'
import { Modal } from "bootstrap"

const showLogInModal = () => {
    const truck_modal = document.querySelector('#loginModal');
    console.log(truck_modal);
    const modal = Modal.getInstance(truck_modal);
    console.log(modal)
}

onMounted(()=>{
  showLogInModal()
})

const userStore = useUserStore()
const showAlertLogin = ref(false)
let myInterval = null

const props = defineProps({
  showCloseButton: Boolean,
  reminderNumber: Number
})

const emit = defineEmits(['hideAlertLogIn'])

const closeModal = () => {
  showAlertLogin.value = false
  clearInterval(myInterval)
  myInterval = setInterval(showModal, 10000);
}


</script>

<style>

</style>