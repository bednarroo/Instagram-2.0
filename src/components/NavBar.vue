<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light justify-content-between">

    <div>
      <div class="d-flex my-auto">
        <div>
          <a class="d-flex fw-bolder text-decoration-none" href="/">
            <img class="mx-3 my-auto" src="../assets/Instagram.webp" alt="Instagram" height="34">
            <h1 class=" fw-bolder my-auto">Instagram</h1>
          </a>
        </div>
    </div>
    </div>

    <div class="d-flex align-items-center">
        <SearchProfile/>
        <button @click="showMenu" class="navbar-toggler mx-4" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    </div>

    <div class="collapse navbar-collapse" :class="collapseNav === true ?  'show' : '' " id="navbarNavAltMarkup">
     <div class="navbar-nav">
       <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
       <a class="nav-item nav-link" href="#">About</a>
       <LoginSignin v-if="!userStore.userDetails.email" />
      <button v-else @click="logOut" type="button" class="btn btn-primary">Sign out</button>
    </div>
    </div>

  </nav>
</template>

<script lang="ts" setup>
import SearchProfile from './SearchProfile.vue'
import LoginSignin from './LoginSignin.vue'
import {ref} from 'vue'
import {useUserStore} from '../stores/userDetails.ts'


const userStore = useUserStore()

const collapseNav = ref<any>(false)

const showMenu = () => {
    collapseNav.value  = !collapseNav.value
}

const logOut = () => {
  userStore.logOut()
  console.log("logout")
}

</script>

<style>

</style>