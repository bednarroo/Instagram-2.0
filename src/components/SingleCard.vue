<template>
<div class="card">
    <img :src="props?.details?.picture_url" class="card-img-top"  alt="...">
    <div class="card-body">
      <h4 class="card-title">{{props?.details?.title}}</h4>
      <p class="card-text">{{props?.details?.description}}</p>
      <p class="card-text my-1">
        
          <small class="d-flex">
            <b> 
              Added by: 
            </b>
            <router-link class="nav-item nav-link" :to="showUrl">
              <img style="width: 20px;" :src="props?.details?.picture_url" class="card-img-top" alt="...">
             <span>
              {{props?.details?.user_id}}
             </span>
          </router-link>
          </small>
          
      </p>
      <p class="card-text my-1">
        <small >
         <b>Last updated</b>: {{ props?.details.created_at.slice(0,10) }}
        </small>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue"


const props = defineProps({
  details: Array,
})

const showUrl = computed(() => {
  return `/profile/${props?.details?.user_id}`
})

</script>

<style scoped>
  .card{
    max-width: 200px;
    margin: 10px 10px
  }
</style>