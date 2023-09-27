<template>
  <div class="container-xxl d-flex flex-wrap mt-4 justify-content-evenly">
    <SingleCard v-for="post in posts" :key="post.id" :details="post" />
    <SingleCard />
  </div>  
</template>

<script lang="ts" setup>
import SingleCard from "./SingleCard.vue"
import {supabase} from '../dataBase/index.js'
import { onMounted, ref } from "vue";


const posts = ref([])

onMounted(  async ()  => {
  const {data, error} = await supabase
  .from('post')
  .select()
  posts.value = data
  console.log(posts.value)
})

</script>

<style>

</style>