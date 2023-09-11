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
          <button type="button" @click="changeOptionAuth('Login')" class="btn mx-3" :class="showSigninOption === true ? 'btn-primary' : 'btn-secondary'" >Sign in</button>
          <button type="button" @click="changeOptionAuth('Signin')" class="btn mx-3" :class="showSigninOption === true ? 'btn-secondary' : 'btn-primary' " >Log in</button>
        </div>
        <div>
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="loginSigninDetial.email">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="mb-3" v-if="showSigninOption">
              <label for="login" class="form-label" >Login</label>
              <input type="email" class="form-control" id="login" aria-describedby="loginHelp" v-model="loginSigninDetial.login">
              <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <div class="mb-3" >
              <label for="password" class="form-label" >Password</label>
              <input type="password" class="form-control" id="password" v-model="loginSigninDetial.password">
            </div>
            <div class="d-flex flex-end justify-content-end">
              <button @click="handleLogInSignIn" type="button" class="btn btn-primary">{{showTitle}}</button>
            </div>
          </form>
        </div>
        <div v-if="errorLogInSignIn">
          {{ errorLogInSignIn }}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'
import {supabase} from '../dataBase/index'
import {useCounterStore} from '../stores/userDetails.ts'

const showSigninOption = ref(true)
const errorLogInSignIn = ref<object>({})
const loginSigninDetial = ref({
  login: "",
  email: "",
  password: ""
})

const storeUserDetails = useCounterStore()

const changeOptionAuth = (option: string) => {
  if(option === 'Login' ) {
    return showSigninOption.value = true
  } else{
    return showSigninOption.value = false
  }
}

const showTitle = computed( () => {
  return showSigninOption.value  === true ? "Sign in" : "Log in"
})

const handleLogInSignIn = async () =>  {
  // Registration
  if (showSigninOption.value === true){
    const { data, error } = await supabase.auth.signUp({
    email: loginSigninDetial.value.email,
    password: loginSigninDetial.value.password
})
  if(error){
    errorLogInSignIn.value = error
    return
  }
  if(data){
     // add user to users table
     console.log(data)
    const error = await supabase
      .from('users')
      .insert({name: loginSigninDetial.value.login, user_id: data.user.id, email: loginSigninDetial.value.email})
      if (error){
        errorLogInSignIn.value = error; 
        return
    }
    // set up storage
    // storeUserDetails.logIn(data.user)
   
  }
  return
}
// log in
  else{
  const { data, error } = await supabase.auth.signInWithPassword({
  email: loginSigninDetial.value.email,
  password: loginSigninDetial.value.password
  })
  if(data){
    console.log(data)
  }
  return
  }
}

</script>

<style>

</style>