<template>
  <div class="d-flex flex-column">
    <AccountStats />
    <button @click="folloUnFollowUser" v-if="userStore.userDetails.id && userStore.userDetails.login !== routerId " type="button" class="btn fw-bolder btn-follow">
      {{followingStatus}}
    </button>
    <AddPicture v-if="userStore.userDetails.id === route.params.id" />
    <CardContainer />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import AccountStats from '../components/AccountStats.vue'
import AddPicture from '../components/AddPicture.vue'
import CardContainer from '../components/CardContainer.vue'
import {useUserStore} from '../stores/userDetails.ts'
import {supabase} from '../dataBase/index'

const route = useRoute();
const routerId = route.params.id
const userStore = useUserStore()
const isUserFollowed = ref(false);

const folloUnFollowUser = async () => {
  userStore.changeLoading();
  if(isUserFollowed.value === false){
    const { error } = await supabase
    .from('subscription')
    .insert({ follower: userStore.userDetails.login, following: route.params.id  })
    if(!error){
      isUserFollowed.value = true
    }
  }
  else{
    const { error } = await supabase
    .from('subscription')
    .delete()
    .eq('following', route.params.id)
    .eq('follower', userStore.userDetails.login)
      isUserFollowed.value = false
  }
  userStore.changeLoading();
}

const followingStatus = computed(()=> {
 if(isUserFollowed.value === true){
  return 'unfollow'
 }else{
  return 'follow'
 }
})
const checkIfUserIsFollowed = async () => {
    const { data, error } = await supabase
    .from('subscription')
    .select()
    .eq('following', route.params.id)
    .eq('follower', userStore.userDetails.login)
    if(data.length > 0){
      isUserFollowed.value = true;
    }
  } 

onMounted(() => {
  checkIfUserIsFollowed()
})

</script>


<style  scoped>

.btn-follow{
  background-color: rgba(253,1,176,255)
}

</style>