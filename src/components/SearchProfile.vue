<template>
    <div  :class="showSearch === true ? 'show' : '' " class="collapse " id="collapseExample">
        <div>
            <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
        </div>
        <div>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <img class="mx-3" src="../assets/search.svg" alt="Instagram" height="24">
            </button>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <img class="mx-3" src="../assets/closebutton.png" alt="Instagram" height="24">
            </button>
        </div>
    </div>
    <button @click="handleShowSearch" class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    <img class="mx-3" src="../assets/search.svg" alt="Instagram" height="24">
    </button>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const showSearch = ref(false)
const handleShowSearch = () => {
    showSearch.value = !showSearch.value
    console.log(showSearch.value)
}

</script>

<style>

</style>