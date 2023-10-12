<template>
  <div class="jumbotron">
  <h1 class="display-4">Hello!</h1>
  <p class="lead">You're not loged in. Please log in to see more without any limits!</p>
  <hr class="my-4">
  <p>This is {{ reminderNumber }} reminder. When you will see third you won't be able to see anything.</p>
  <div class="lead">
    I understand
  </div>
</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const reminderNumber = ref(0)
</script>

<style>

</style>