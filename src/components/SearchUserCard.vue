!<template>
    <router-link class="text-decoration-none" :to="`/profile/${record.login}`">
        <div class="card m-2 d-flex flex-row">
            <div class="p-4">
                <img :src='record.main_photo' width="50" alt="">
            </div>
            <div class="card-body d-flex align-items-center">
                <h4 >
                    {{ record.login }}
                </h4>
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