import { defineStore } from 'pinia'
import {supabase} from '../dataBase/index.js'

export const useUserStore = defineStore('userDetails', {
  state: () => ({
    userDetails: {
      id: null,
      email: null
    },
  }),
  actions: {
    logIn(dataLogIn) {
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
    }
  }
})