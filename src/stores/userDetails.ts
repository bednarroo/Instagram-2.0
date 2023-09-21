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
    logIn(dataLogIn:{ idSignUp: string, emailSignUp: string }) {
      this.userDetails = {
        id: dataLogIn.idSignUp,
        email: dataLogIn.emailSignUp,
      }
    },
    async checkIfLoggedWhenAppRun(){
      console.log(this.changeLoading);
      this.changeLoading()
      const {data} = await supabase.auth.getUser()
        this.userDetails.id = data.user.id 
        this.userDetails.email = data.user.email 
      this.changeLoading()
      console.log(this.changeLoading);
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