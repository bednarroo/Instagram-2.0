<template>
 
  <NavBar />
  <RouterView />
  <Footer />
  <LoadingSpinner/>
  <AlertLogIn @hideAlertLogIn="handleClosePopUp" v-if="showAlertLogin !== false" :showCloseButton = "showCloseButton" :reminderNumber="reminderNumber" />

</template>

<script lang="ts" setup>
import {RouterView} from 'vue-router'
import NavBar from './components/NavBar.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import AlertLogIn from './components/AlertLogIn.vue'
import { onMounted, ref } from 'vue'
import {useUserStore} from './stores/userDetails.ts'

const handleClosePopUp = () => {
  if(reminderNumber.value > 3) {
    showCloseButton.value = false
    clearInterval(myInterval)
  } else if (reminderNumber.value <= 3) {
    clearInterval(myInterval)
    closeModal()
    myInterval = setInterval(showModal, 5000);
    console.log(reminderNumber.value)
    showCloseButton.value = true

  }
  reminderNumber.value++

}


const userStore = useUserStore()
const reminderNumber = ref(0)
const showAlertLogin = ref(false)
const showCloseButton = ref(true)
let myInterval = null

onMounted (() => {
  
  console.log(reminderNumber.value)
  userStore.checkIfLoggedWhenAppRun()
  // console.log(useUserStore.userDetails)
  // if(useUserStore.userDetails.id === null)
  // {
  //   console.log("bleble")
   myInterval = setInterval(showModal, 2000);
  // }
}
)

const showModal = () => {
 showAlertLogin.value = true;
}
const closeModal = () => {
 showAlertLogin.value = false;
}

</script>




