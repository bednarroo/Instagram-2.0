<template  >
  <div class="jumbotron">
  <h1 class="display-4">Hello!</h1>
  <p class="lead">You're not loged in. Please log in to see more without any limits!</p>
  <hr class="my-4">
  <p>This is {{ reminderNumber }} reminder. When you will see third you won't be able to see anything.</p>
  <button @click="$emit('hideAlertLogIn')" class="lead" v-if="reminderNumber < 3">
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
let myInterval = null

const emit = defineEmits(['hideAlertLogIn'])

onMounted(()=> {
  if(useUserStore?.userDetails?.id === null){
   myInterval = setInterval(showModal, 10000);
  }
});

const closeModal = () => {
  showAlertLogin.value = false
  clearInterval(myInterval)
  myInterval = setInterval(showModal, 10000);
}

const showModal = () => {
 showAlertLogin.value = true;
}
</script>

<style>

</style>