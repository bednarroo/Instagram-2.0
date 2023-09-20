<template>
 
  <NavBar />
  <RouterView />
  <Footer />
  <LoadingSpinner/>

</template>

<script lang="ts" setup>
import {RouterView} from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import { onMounted } from 'vue'
import {useUserStore} from './stores/userDetails.ts'


const userStore = useUserStore()

onMounted (() => {
  userStore.checkIfLoggedWhenAppRun()
})

</script>
