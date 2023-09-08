<template>
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
  Log in
</button>

<!-- Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{ showTitle }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="d-flex px-5 justify-content-center"  role="group" aria-label="Basic example">
          <button type="button" @click="changeOptionAuth('Login')" class="btn mx-3" :class="showSigninOption === true ? 'btn-primary' : 'btn-secondary'" >Log in</button>
          <button type="button" @click="changeOptionAuth('Signin')" class="btn mx-3" :class="showSigninOption === true ? 'btn-secondary' : 'btn-primary' " >Sign in</button>
        </div>
        <div>
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="mb-3" v-if="showSigninOption">
              <label for="login" class="form-label">Login</label>
              <input type="email" class="form-control" id="login" aria-describedby="emailHelp">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="mb-3" >
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password">
            </div>
            <div class="d-flex flex-end justify-content-end">
              <button type="submit" class="btn btn-primary">{{showTitle}}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'

const showSigninOption = ref(true)
const loginSigninDetial = ref({
  login: "",
  email: "",
  password: ""
})

const changeOptionAuth = (option) => {
  if(option === 'Login' ) {
    return showSigninOption.value = true
  } else{
    return showSigninOption.value = false
  }
}

const showTitle = computed( () => {
  return showSigninOption.value  === false ? "Sign in" : "Log in"
})

</script>

<style>

</style>