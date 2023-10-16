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

const handleClosePopUp = (flow) => {
  if(showAlertLogin.value > 3) {
    showCloseButton.value = false
    clearInterval(myInterval)
  } else if (showAlertLogin.value <= 3) {
    clearInterval(myInterval)
    myInterval = setInterval(showModal, 10000);
    showAlertLogin.value = true;
  }
}


const userStore = useUserStore()
const reminderNumber = ref(0)
const showAlertLogin = ref(false)
const showCloseButton = ref(false)
let myInterval = null

onMounted (() => {
  userStore.checkIfLoggedWhenAppRun()
  // console.log(useUserStore.userDetails)
  // if(useUserStore.userDetails.id === null)
  // {
  //   console.log("bleble")
   myInterval = setInterval(showModal, 4000);
  // }
}
)

const showModal = () => {
 showAlertLogin.value = true;
}

</script>




