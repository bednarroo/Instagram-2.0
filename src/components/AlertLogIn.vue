<template  >
  <div class="jumbotron">
  <h1 class="display-4">Hello!</h1>
  <p class="lead">You're not loged in. Please log in to see more without any limits!</p>
  <hr class="my-4">
  <p>This is {{ props.sreminderNumber }} reminder. When you will see third you won't be able to see anything.</p>
  <button @click="$emit('hideAlertLogIn')" class="lead" v-if="showCloseButton">
    I understand
  </button>
</div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {useUserStore} from '../stores/userDetails.ts'


const userStore = useUserStore()
const showAlertLogin = ref(false)
let myInterval = null

const props = defineProps({
  showCloseButton: Boolean,
  reminderNumber: Number
})

const emit = defineEmits(['hideAlertLogIn'])

const closeModal = () => {
  showAlertLogin.value = false
  clearInterval(myInterval)
  myInterval = setInterval(showModal, 10000);
}
</script>

<style>

</style>