!<template>
    <router-link @click="closeSearchModal" class="text-decoration-none" :to="`/profile/${record.login}`">
        <div class="card m-2 d-flex flex-row">
            <div class="p-1 m-2">
                <img class="m-1" :src='record.main_photo' width="50" alt="">
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
import {Modal} from 'bootstrap'


const closeSearchModal = () => {
    const truck_modal = document.querySelector('#searchModal');
    const modal = Modal.getInstance(truck_modal);
    modal.hide()
}

const props = defineProps({
  record: Object,
})

</script>

<style>

</style>