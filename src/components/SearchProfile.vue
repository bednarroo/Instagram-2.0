<template>
  <div>
    <!-- Button trigger modal -->
    
    <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#searchModal">
      
      <img src="../assets/search.svg" alt="" style="width: 15px; margin-right: 10px;" >
      <span style="font-size: 18px;"> Search </span>
    </button>

<!-- Modal -->
<div class="modal" id="searchModal" tabindex="-1" aria-labelledby="searchModal" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5  class="modal-title text-dark" id="searchModalLabel">Search user:</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label  for="FormControlInput1" class="form-label text-dark">Username</label>
          <input  type="email" class="form-control" v-model="username" id="FormControlInput1" placeholder="Please type user nick here!">
        </div>
        <!-- <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div> -->
        <SearchUserCard v-for="record in records" :record="record" :key="record.id"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import {supabase} from '../dataBase/index.js'
import SearchUserCard from './SearchUserCard.vue'

const username = ref("")
const records = ref([])

watch(username, async(oldwaluve, newvalue)=>{
  if(username.value.length > 1){
    const {data, error} = await supabase
    .from('users')
    .select()
    .ilike('login', `%${username.value}%`)
    records.value = data
  }
})

</script>

<style>

</style>