import { defineStore } from 'pinia'
import {supabase} from '../dataBase/index.js'

export const useUserStore = defineStore('userDetails', {
  state: () => ({
    userDetails: {
      id: null,
      login: null,
      email: null
    },
  }),
  actions: {
    logIn(dataSignUp, dataLogIn) {
      this.userDetails = {
        id: dataSignUp.user.id,
        email: dataSignUp.user.email,
        login: dataLogIn
      }
    },
    async logOut() {
      const { error } = await supabase.auth.signOut()
      this.userDetails = {
        id: null,
        email: null,
        login: null
      }
    }
  }
})