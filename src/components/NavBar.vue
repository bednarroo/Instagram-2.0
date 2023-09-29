<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light justify-content-between mb-1 border-bottom">

    <div class="d-flex flex-grow-1 mx-md-5">
      <div class="d-flex my-auto flex-grow-1">
        <div>
          <router-link class="d-flex fw-bolder text-decoration-none" to="/">
            <img class="mx-3 my-auto" src="../assets/Instagram.webp" alt="Instagram" height="34">
            <h1 class=" fw-bolder my-auto h3">Instagram</h1>
          </router-link>
        </div>
    </div>
    </div>

    <div class="d-flex align-items-center  ">
        <button @click="showMenu" class="navbar-toggler mx-1" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    </div>

    <div class="collapse navbar-collapse flex-grow-0 mx-md-5" :class="collapseNav === true ?  'show' : '' " id="navbarNavAltMarkup">
     <div class="navbar-nav">
      <button type="button" class="btn btn-outline-primary m-1 p-0"><SearchProfile/></button>
      <template v-if="userStore.userDetails.id">
        <button type="button" class="btn btn-outline-primary m-1 p-0"><router-link class="nav-item nav-link" to="/about"><img src="../assets/about.png" style="height: 20px; margin-right: 5px;" alt=""><span style="font-size: 18px;"> About</span> </router-link></button>
      <button type="button" class="btn btn-outline-primary m-1 p-0"><router-link class="nav-item nav-link" :to="`/profile/${userStore.userDetails.id}`">  <img src="../assets/person.svg" alt="" style=" margin-right: 5px;" > <span style="font-size: 18px;"> My account</span> </router-link></button>
      </template>
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
import { storeToRefs } from 'pinia';


const userStore = useUserStore()

const { userDetails } = storeToRefs(userStore)

const collapseNav = ref<any>(false)

const showMenu = () => {
    collapseNav.value  = !collapseNav.value
}

const logOut = () => {
  userStore.logOut()
  userStore.changeLoading()
  console.log("logout")
}

</script>

<style>

</style>