<template>
  <div class="d-flex flex-column">
    <AccountStats />
    <button @click="followUser" v-if="userStore.userDetails.id && userStore.userDetails.login !== routerId " type="button" class="btn fw-bolder btn-follow">
      Follow
    </button>
    <AddPicture v-if="userStore.userDetails.id" />
    <CardContainer />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AccountStats from '../components/AccountStats.vue'
import AddPicture from '../components/AddPicture.vue'
import CardContainer from '../components/CardContainer.vue'
import {useUserStore} from '../stores/userDetails.ts'
import {supabase} from '../dataBase/index'


const route = useRoute();
const routerId = route.params.id
const userStore = useUserStore()
const isUserFollowed = false;

const followUser = async () => {
  const { error } = await supabase
  .from('subscription')
  .insert({ follower: userStore.userDetails.login, following: route.params.id  })
}
const checkIfUserIsFollowed = async () => {
    const { data, error } = await supabase
    .from('subscription')
    .select()
    .eq('follower', userStore.userDetails.login)
    .eq('following', route.params.id)
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