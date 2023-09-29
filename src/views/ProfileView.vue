<template>
  <div class="d-flex flex-column">
    <AccountStats />
    <button v-if="userStore.userDetails.id" type="button" class="btn fw-bolder btn-follow">
      Follow
    </button>
    <AddPicture v-if="userStore.userDetails.id" />
    <CardContainer />
  </div>
</template>

<script lang="ts" setup>
import AccountStats from '../components/AccountStats.vue'
import AddPicture from '../components/AddPicture.vue'
import CardContainer from '../components/CardContainer.vue'
import {useUserStore} from '../stores/userDetails.ts'

const userStore = useUserStore()

</script>


<style  scoped>

.btn-follow{
  background-color: rgba(253,1,176,255)
}

</style>