<template>
  <div class="container-xxl d-flex flex-wrap mt-4 justify-content-evenly">
    <SingleCard v-for="post in posts" :key="post.id" :details="post" />
    <h1>xd</h1>
  </div>  
</template>

<script lang="ts" setup>
import SingleCard from "./SingleCard.vue"
import {supabase} from '../dataBase/index.js'
import { onMounted, ref, watch } from "vue"
import {useUserStore} from '../stores/userDetails.ts'

const userStore =  useUserStore()
const posts = ref([])



onMounted( ( ) => {
  if(userStore.userDetails.id){
    checkFollowing(userStore.userDetails.id)
}else {
    checkFollowing(null)
}
})
const checkFollowing =  async (id) => {
  if(id !== null){
    id === null ? id = '' : id
    const {data: userfollowing, error} = await supabase
    .from('subscription')
    .select()
    .eq("follower", id);
    console.log(userfollowing)
  }else{
    id === null ? id = '' : id
    const {data: userfollowing, error} = await supabase
    .from('subscription')
    .select()
    .eq("follower", id);
  }
}

</script>

<style>

</style>