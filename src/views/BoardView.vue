<template>
    <CardContainer v-if="userStore.userDetails.id" />
    <CardContainer v-else />
</template>

<style>

</style>

<script lang="ts" setup>
import CardContainer from '../components/CardContainer.vue'
import {useUserStore} from '../stores/userDetails.ts'
const userStore =  useUserStore()

</script>
