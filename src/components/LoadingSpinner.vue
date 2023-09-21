<template>
    <div class="d-flex flex-column position-fixed w-100 h-100 top-0 start-0 justify-content-center align-items-center" :class="userStore.loading === false ? 'd-none' : ''" style="background-color: #ff00f863; overflow: hidden">
            <div class="spinner-border my-5 d-flex flex-column flex-wrap justify-content-center align-content-center " role="status">
                <img src="../assets/Instagram.webp" style="width: 25vw" >
            </div>
            <span class="sr-only h1 my-5">Loading...</span>
    </div>
</template>

<script setup lang="ts">
import {useUserStore} from '../stores/userDetails.ts'
const userStore = useUserStore()

</script>

<style>

</style>