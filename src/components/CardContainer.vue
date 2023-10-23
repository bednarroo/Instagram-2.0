<template>
  <div class="container-xxl d-flex flex-wrap mt-4 justify-content-evenly">
    <SingleCard v-for="post in posts" :key="post.id" :details="post" />
  </div>  
</template>

<script lang="ts" setup>
import SingleCard from "./SingleCard.vue"
import {supabase} from '../dataBase/index.js'
import { onMounted, ref, watch } from "vue"
import {useUserStore} from '../stores/userDetails.ts'

const userStore =  useUserStore()
const posts = ref([])
const following = ref(null)

onMounted( ( ) => {
  if(userStore.userDetails.id){
    checkFollowing(userStore.userDetails.id)
} else {
    checkFollowing(null)
}
})
const checkFollowing =  async (id) => {
  if(id !== null){
    const {data, error} = await supabase
    .from('subscription')
    .select()
    .eq("follower", id)
    following.value = data
  }
  if(following.value !== null){
    const {data, error} = await supabase
    .from('post')
    .select()
    .eq("user_id", following.value)
  }
  else{
    const {data, error} = await supabase
    .from('post')
    .select()
    posts.value = data
  }

}

</script>

<style>

</style>