<template>
 
  <NavBar />
  <RouterView />
  <Footer />
  <LoadingSpinner/>
  <AlertLogIn/>

</template>

<script lang="ts" setup>
import {RouterView} from 'vue-router'
import NavBar from './components/NavBar.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import AlertLogIn from './components/AlertLogIn.vue'
import { onMounted } from 'vue'
import {useUserStore} from './stores/userDetails.ts'


const userStore = useUserStore()

onMounted (() => {
  userStore.checkIfLoggedWhenAppRun()
})

</script>
