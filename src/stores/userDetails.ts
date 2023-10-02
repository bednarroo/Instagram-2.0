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
      console.log(this.loading)
      this.loading = !this.loading
    },
    logIn(id, email) {
      this.userDetails = {
        id,
        email,
        login
      }
    },
    async checkIfLoggedWhenAppRun(){
      this.changeLoading()
      const {data: dataAppRun} = await supabase.auth.getUser()
      if (dataAppRun.user !== null){
        this.userDetails.id = dataAppRun.user.id 
        this.userDetails.email = dataAppRun.user.email 
      }
      this.changeLoading()
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