<template>
  <button type="button" class="btn addButton" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
   Add picture!
  </button>

<!-- Modal -->
  <div class="modal fade p-0" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Add your picture!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body py-0">
        <div class="modal-dialog modal-dialog-centered">
    <div class="d-flex flex-column">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Picture name</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="mb-3">
        <label for="formFile" class="form-label">Attatch your file</label>
        <input class="form-control" type="file" id="formFile">
    </div>
    </div>
    
    
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>


</template>

<script setup lang="ts">

</script>

<style scoped>
.addButton{
  background-color: rgba(253,1,176,255)
}
</style>