<template>
  <div class="container-xxl d-flex flex-wrap mt-4 justify-content-evenly">
    <div class="subscribtion__message my-5 d-flex flex-column" v-if="posts.length === 0 && userStore.userDetails.id ">
      <h2 class="mx-4 text-center">You're not subscribing anything. Please add some subscription to see interesting content!</h2>
      <button class="btn btn-primary my-4 mx-5 "> Show users!</button>
    </div>
    <SingleCard v-for="post in posts" :key="post.id" :details="post" />
  </div>  
</template>

<script lang="ts" setup>
import SingleCard from "./SingleCard.vue"
import {supabase} from '../dataBase/index.js'
import { onMounted, ref, watch } from "vue"
import {useUserStore} from '../stores/userDetails.ts'
import {Modal} from 'bootstrap'

let myModal = new Modal('#searchModal');

const closeSearchModal = () => {

    myModal.show()
}


const userStore =  useUserStore()
const posts = ref([])
const following = ref(null)

onMounted( ( ) => {
  closeSearchModal()
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
.subscribtion__message{
  max-width: 600px;
}
</style>