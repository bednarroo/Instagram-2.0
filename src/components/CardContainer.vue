<template>
  <div class="container-xxl d-flex flex-wrap mt-4 justify-content-evenly">
    <SingleCard v-for="post in posts" :key="post.id" :details="post" />
  </div>  
</template>

<script lang="ts" setup>
import SingleCard from "./SingleCard.vue"
import {supabase} from '../dataBase/index.js'
import { onMounted, ref } from "vue"
import {useUserStore} from '../stores/userDetails.ts'

const userStore = useUserStore()


const posts = ref([])

onMounted(  async ()  => {
  const id = await userStore.getId()
  await console.log(id)
  if(userStore.userDetails.id){
    console.log(userStore.userDetails.id)
    // checkFollowing()
  }


    // const {data, error} = await supabase
    // .from('post')
    // .select()
    // .order('created_at',{ ascending: false })
    // posts.value = data
  // } else{
    // const {data, error} = await supabase
    // .from('post')
    // .select() 
    // .order('created_at',{ ascending: false })
    // posts.value = data
  }
);

const checkFollowing =  async () => {
 
    const {data: userfollowing, error} = await supabase
    .from('subscription')
    .select()
    .eq("follower", userStore.userDetails.id);
    console.log(userfollowing)
}

</script>

<style>

</style>