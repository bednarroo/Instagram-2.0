<template>
 
  <NavBar />
  <RouterView />
  <Footer />
  <LoadingSpinner/>
  <AlertLogIn @hideAlertLogIn="handleClosePopUp" v-if="showAlertLogin !== false" :showCloseButton = "showCloseButton" :reminderNumber="reminderNumber" />

</template>

<script lang="ts" setup>
import {RouterView, onBeforeRouteUpdate} from 'vue-router'
import NavBar from './components/NavBar.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import AlertLogIn from './components/AlertLogIn.vue'
import { onMounted, onUpdated, ref } from 'vue'
import {useUserStore} from './stores/userDetails.ts'

const handleClosePopUp = () => {
  if(reminderNumber.value > 3) {
    showCloseButton.value = false
    clearInterval(myInterval)
  } else if (reminderNumber.value <= 3) {
    clearInterval(myInterval)
    closeModal()
    myInterval = setInterval(showModal, 5000)
    showCloseButton.value = true

  }
  reminderNumber.value++

}


const userStore = useUserStore()
const reminderNumber = ref(0)
const showAlertLogin = ref(false)
const showCloseButton = ref(true)
let myInterval = null

onMounted ( async ()  => {
  await userStore.checkIfLoggedWhenAppRun()
  const {id} = userStore.userDetails
  if( id === null){
    myInterval = setInterval(showModal, 2000);
  }
}
)

onUpdated(()=>{
  onBeforeRouteUpdate( (to, from)=>{
  console.log(to, from)
})
})



const showModal = () => {
 showAlertLogin.value = true;
}
const closeModal = () => {
 showAlertLogin.value = false;
}

</script>




