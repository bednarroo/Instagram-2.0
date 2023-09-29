<template>
  <div class="d-flex flex-column">
    <AccountStats />
    <button type="button" class="btn btn-primary fw-bolder">Follow</button>
    <AddPicture />
    <CardContainer />
  </div>
</template>

<script lang="ts" setup>
import AccountStats from '../components/AccountStats.vue'
import AddPicture from '../components/AddPicture.vue'
import CardContainer from '../components/CardContainer.vue'

</script>
