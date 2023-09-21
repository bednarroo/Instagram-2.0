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
        <button type="button" ref="closeSignInbutton" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
import {ref, computed, onMounted} from 'vue'
import {supabase} from '../dataBase/index'
import {useUserStore} from '../stores/userDetails.ts'

const showSigninOption = ref(true)
const errorLogInSignIn = ref<string>('')
const loginSigninDetial = ref({
  email: "",
  password: ""
})
const closeSignInbutton = ref('')

const storeUserDetails = useUserStore()

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

  storeUserDetails.changeLoading()

  // Registration
  if (showSigninOption.value === true){
  
    //Sign Up user

    const { data: dataSignUp, error: singUpError } = await supabase.auth.signUp({
    email: loginSigninDetial.value.email,
    password: loginSigninDetial.value.password
})
  if(singUpError){
    console.log(singUpError)
    errorLogInSignIn.value = singUpError.message
  }
  if(dataSignUp){
    
    const {id: idSignUp, email: emailSignUp} = dataSignUp.user
    // set up storage
    storeUserDetails.logIn({idSignUp, emailSignUp})
    closeSignInbutton.value.click()
  }
    return storeUserDetails.changeLoading()
}
// log in
  else{
  const { data: dataLogIn, error: errorLogiIn } = await supabase.auth.signInWithPassword({
    email: loginSigninDetial.value.email,
    password: loginSigninDetial.value.password
  })
  if(dataLogIn.user){
    storeUserDetails.logIn(dataLogIn)
    closeSignInbutton.value.click()
    return  storeUserDetails.changeLoading()
  }
  if(errorLogiIn){
    errorLogInSignIn.value = errorLogiIn.message
    return storeUserDetails.changeLoading()
  }
  }
}


</script>

<style>

</style>