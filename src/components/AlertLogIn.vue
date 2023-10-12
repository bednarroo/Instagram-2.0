<template v-if="reminderNumber < 3 && !userStore.userDetails.id && showAlertLogin ">
  <div class="jumbotron">
  <h1 class="display-4">Hello!</h1>
  <p class="lead">You're not loged in. Please log in to see more without any limits!</p>
  <hr class="my-4">
  <p>This is {{ reminderNumber }} reminder. When you will see third you won't be able to see anything.</p>
  <button @click="!showAlertLogin"  class="lead" v-if="reminderNumber < 3">
    I understand
  </button>
</div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {useUserStore} from '../stores/userDetails.ts'


const userStore = useUserStore()
const reminderNumber = ref(0)
const showAlertLogin = ref(false)
const myInterval = setInterval(changeAlertLoginStatus, 10000);

const changeAlertLoginStatus = () => {
  if(reminderNumber.value < 3){
    clearInterval(myInterval)
    myInterval()
    reminderNumber.value++
    showAlertLogin.value = false
  }else{
    clearInterval(myInterval)
  }
}


</script>

<style>

</style>