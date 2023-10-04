<template>
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary p-2 m-sml-3 m-1 " data-bs-toggle="modal" data-bs-target="#loginModal">
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
        <div class="alert alert-primary" role="alert">
          Choose one option
        </div>
        <div class="d-flex p-3 justify-content-center"  role="group" aria-label="Basic example">
          <button type="button" @click="changeOptionAuth('Login')" class="btn mx-3" :class="showSigninOption === true ? 'btn-primary' : 'btn-secondary'" >Sign in</button>
          <span class=" d-flex justify-content-around align-items-center"> or </span>
          <button type="button" @click="changeOptionAuth('Signin')" class="btn mx-3" :class="showSigninOption === true ? 'btn-secondary' : 'btn-primary' " >Log in</button>
        </div>
        <div>
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="loginSigninDetial.email">
            </div>
            <div class="mb-3" v-if="showSigninOption" >
              <label for="login" class="form-label" >Login</label>
              <input type="text" class="form-control" id="login" v-model="loginSigninDetial.login">
            </div>
            <div class="mb-3" >
              <label for="password" class="form-label" >Password</label>
              <input type="password" class="form-control" id="password" v-model="loginSigninDetial.password">
            </div>
            <div class="d-flex flex-column-reverse">
              <span v-if="errorLogInSignIn" class="text-danger">
            {{ errorLogInSignIn }}
          </span>
              <button
               @click="handleLogInWtihGoogle"
              type="button" 
              class="btn btn-dark my-2 d-flex justify-content-center "> 
              <img class="mx-3" style = 'width: 25px' src="../assets/logInWithGoogle.png">
                {{showTitle}} with Google
              </button>
              <button @click="handleLogInSignIn" type="button" class="btn btn-primary">{{showTitle}} with password</button>
            </div>
          </form>
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
  password: "",
  login: ""
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

const handleLogInWtihGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
})
}

const handleLogInSignIn = async () =>  {

  storeUserDetails.changeLoading()

  // Registration
  if (showSigninOption.value === true){

    // check if this user exists
    const { data: checkUserExistsData, error: checkUserExistsError } = await supabase
    .from('users')
    .select()
    .eq('login', loginSigninDetial.value.login )

  
    //Sign Up user

    if(checkUserExistsError){
      errorLogInSignIn.value = checkUserExistsError.message
      return storeUserDetails.changeLoading()
    }

    if(checkUserExistsData.length === 0){
      const { data: dataSignUp, error: singUpError } = await supabase.auth.signUp({
      email: loginSigninDetial.value.email,
      password: loginSigninDetial.value.password
    })
    if(checkUserExistsData.length !== 0){
      return
    }
    
    
    if(singUpError){
      console.log(singUpError, 'datasignuperror')
      errorLogInSignIn.value = singUpError.message
    }
    if(dataSignUp){
      
      // Create record in DB for user and return it

      const { data: dataCreateUser, error } = await supabase
      .from('users')
      .insert({ email: loginSigninDetial.value.email, login: loginSigninDetial.value.login, user_id: dataSignUp.user.id  })
      .select()
      
      if(dataCreateUser){
        // set up storage
        storeUserDetails.logIn(dataCreateUser[0].id, dataCreateUser[0].email ,dataCreateUser[0].login ,dataCreateUser[0].user_id)
        closeSignInbutton.value.click()

      }
    }
    return storeUserDetails.changeLoading()
  }
}
  // log in
  else{
  const { data: dataLogIn, error: errorLogiIn } = await supabase.auth.signInWithPassword({
    email: loginSigninDetial.value.email,
    password: loginSigninDetial.value.password
  })

  if(errorLogiIn){
    errorLogInSignIn.value = errorLogiIn.message
    return storeUserDetails.changeLoading()
  }

  if(dataLogIn.user){
    const { data: checkUserExistsData, error: checkUserExistsError } = await supabase
    .from('users')
    .select()
    .eq('email', loginSigninDetial.value.email )

    if(checkUserExistsData){
      storeUserDetails.logIn(checkUserExistsData[0].id, checkUserExistsData[0].email ,checkUserExistsData[0].login ,checkUserExistsData[0].user_id)
    }

    if(checkUserExistsError){
      errorLogInSignIn.value = errorLogiIn.message
      return storeUserDetails.changeLoading()     
    }

    closeSignInbutton.value.click()
    return  storeUserDetails.changeLoading()
  }

  }
}


</script>

<style>

</style>