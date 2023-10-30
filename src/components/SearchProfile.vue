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
        <h5  class="modal-title text-dark h4 bold" id="searchModalLabel">Search user</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label  for="FormControlInput1" class="form-label text-dark h4 bold">Username</label>
          <input  type="email" class="form-control" v-model="username" id="FormControlInput1" placeholder="Please type user nick here!">
        </div>
        <div v-if="loadSearching" class="d-flex flex-column align-items-center">
          <div class="spinner-border text-primary" role="status">
          </div>
          <span class="sr-only mx-5">Loading... </span>
        </div>
        <div class="d-flex flex-wrap">
          <SearchUserCard @closeSearchModal="hideSearchPopUp" v-for="record in records" :record="record" :key="record.id"/>
        </div>
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
const loadSearching = ref(false)

const hideSearchPopUp = () => {
  console.log('no co tam?')
}

watch(username, async(oldwaluve, newvalue)=>{
  if(username.value.length > 1){
    loadSearching.value = true
    const {data, error} = await supabase
    .from('users')
    .select()
    .ilike('login', `%${username.value}%`)
    records.value = data
    if (data || error){
    loadSearching.value = false
  }
  }
  
})

</script>

<style>

</style>