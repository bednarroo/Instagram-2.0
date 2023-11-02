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
import { onMounted, onUpdated, ref, watch } from 'vue'
import {useUserStore} from './stores/userDetails.ts'
import { useRoute } from 'vue-router'

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
const route = useRoute()

onMounted ( async ()  => {
  await userStore.checkIfLoggedWhenAppRun()
  const {id} = userStore.userDetails
  if( id === null){
    myInterval = setInterval(showModal, 2000);
  }
}
)

// fetch the user information when params change
  watch(
    () => route.params.id,
     console.log("XD")
   )


const showModal = () => {
 showAlertLogin.value = true;
}
const closeModal = () => {
 showAlertLogin.value = false;
}

</script>




