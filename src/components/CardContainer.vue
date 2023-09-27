<template>
  <div class="container-xxl d-flex flex-wrap mt-4 justify-content-evenly">
    <SingleCard v-for="post in posts" :key="post.id" :props="post"  />
    <SingleCard />
    <SingleCard />
    <SingleCard />
    <SingleCard />
    <SingleCard />
    <SingleCard />
    <SingleCard />
  </div>  
</template>

<script lang="ts" setup>
import SingleCard from "./SingleCard.vue"
import {supabase} from '../dataBase/index.js'

const {data: posts, error} = await supabase
  .from('post')
  .select()

console.log(posts)

</script>

<style>

</style>