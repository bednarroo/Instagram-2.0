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
const following = ref([])

onMounted( ( ) => {
  if(userStore.userDetails.id){
    checkFollowing(userStore.userDetails.id)
} else {
    checkFollowing(null)
}
})
const checkFollowing =  async (id) => {
  if(id !== null){
    const {data: userfollowing, error} = await supabase
    .from('subscription')
    .select()
    .eq("follower", id)
    following.value = userfollowing
  }
  if(following.value !== null){
    // tutaj wyszukaj odpowiednie posty
  }
  // tutaj wyszukaj odpowiednie posty

}

</script>

<style>

</style>