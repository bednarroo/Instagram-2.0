<template>
 
  <NavBar />
  <RouterView />
  <Footer />
  <LoadingSpinner/>
  <AlertLogIn  v-if="showAlertLogin !== false"/>

</template>

<script lang="ts" setup>
import {RouterView} from 'vue-router'
import NavBar from './components/NavBar.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import AlertLogIn from './components/AlertLogIn.vue'
import { onMounted, ref } from 'vue'
import {useUserStore} from './stores/userDetails.ts'


const userStore = useUserStore()
const reminderNumber = ref(0)
const showAlertLogin = ref(false)
let myInterval = null

onMounted (() => {
  userStore.checkIfLoggedWhenAppRun()
  // console.log(useUserStore.userDetails)
  // if(useUserStore.userDetails.id === null)
  // {
  //   console.log("bleble")
   myInterval = setInterval(showModal, 100);
  // }
}
)

const closeModal = () => {
  showAlertLogin.value = false
  console.log("XD")
  clearInterval(myInterval)
  myInterval = setInterval(showModal, 10000);
}

const showModal = () => {
 showAlertLogin.value = true;
}

</script>




