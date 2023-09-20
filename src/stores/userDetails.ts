import { defineStore } from 'pinia'
import {supabase} from '../dataBase/index.js'
import {ref} from 'vue'

export const useUserStore = defineStore('userDetails', {
  state: () => ({
    loading: ref(false),
    userDetails: {
      id: null,
      email: null
    },
  }),
  actions: {
    changeLoading() {
      this.loading = !this.loading
      console.log(this.loading)
    },
    logIn(dataLogIn:any) {
      this.userDetails = {
        id: dataLogIn.user.id,
        email: dataLogIn.user.email,
      }
    },
    async checkIfLoggedWhenAppRun(){
      const {data} = await supabase.auth.getUser()
        this.userDetails.id = data.user.id 
        this.userDetails.email = data.user.email 
    },
    async logOut() {
      const { error } = await supabase.auth.signOut()
      this.userDetails = {
        id: null,
        email: null,
      }
      this.changeLoading()
    }
  }
})