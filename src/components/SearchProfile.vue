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
          <label for="exampleFormControlInput1" class="form-label text-dark">Username</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Please type user nick here!">
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

</script>

<style>

</style>