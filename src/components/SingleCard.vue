<template>
<div class="card">
    <img src="../assets/Instagram.webp" class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text my-1">
        <small>
          <b> Added by:</b> Sebastian
          <img style="width: 20px;" src="../assets/Instagram.webp" class="card-img-top" alt="...">
        </small>
      </p>
      <p class="card-text my-1">
        <small >
         <b>Last updated</b>: {{props.created_at}}
        </small>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  created_at: String,
  description: String,
  id: String,
  picture_url: String,
  title: String,
  user_id: String,
})

</script>

<style scoped>
  .card{
    max-width: 200px;
    margin: 10px 10px
  }
</style>