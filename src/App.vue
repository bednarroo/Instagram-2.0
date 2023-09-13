<template>
 
  <NavBar />
  <RouterView />
  <Footer />
  
</template>

<script lang="ts" setup>
import {RouterView} from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import { onMounted } from 'vue'
import {useUserStore} from './stores/userDetails.ts'


const userStore = useUserStore()

onMounted (() => {
  userStore.checkIfLoggedWhenAppRun()
})

</script>
