<template>
  <div class="container-xxl d-flex flex-wrap mt-4 justify-content-evenly">
    <SingleCard v-for="post in posts" :key="post.id" :details="post" />
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
  .order('created_at',{ ascending: false })
  posts.value = data
})

</script>

<style>

</style>