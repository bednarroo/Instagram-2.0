!<template>
    <router-link :to="`/profile/${record.login}`">
        <div class="card my-1 d-flex flex-row">
            <div class="p-4">
                <img src="../assets/Instagram.webp" width="50" alt="">
            </div>
            <div class="card-body">
                {{ record.login }}
            </div>
        </div>
    </router-link>
</template>

<script setup>

const props = defineProps({
  record: Object,
})

</script>

<style>

</style>