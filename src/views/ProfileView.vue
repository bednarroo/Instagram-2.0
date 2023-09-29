<template>
  <div class="d-flex flex-column">
    <AccountStats />
    <button type="button" class="btn fw-bolder btn-follow">Follow</button>
    <AddPicture />
    <CardContainer />
  </div>
</template>

<script lang="ts" setup>
import AccountStats from '../components/AccountStats.vue'
import AddPicture from '../components/AddPicture.vue'
import CardContainer from '../components/CardContainer.vue'

</script>


<style  scoped>

.btn-follow{
  background-color: rgba(253,1,176,255)
}

</style>