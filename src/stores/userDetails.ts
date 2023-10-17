import { defineStore } from 'pinia'
import {supabase} from '../dataBase/index.js'
import {ref} from 'vue'

export const useUserStore = defineStore('userDetails', {
  state: () => ({
    loading: ref(false),
    userDetails: {
      id: null,
      email: null,
      login: null,
      userId: null
    },
  }),
  actions: {
    getId(){
      return this.userDetails.id
    },
    changeLoading() {
      this.loading = !this.loading
    },
    logIn(id, email, login, userId) {
      this.userDetails = {
        id,
        email,
        login,
        userId
      }
    },
    async checkIfLoggedWhenAppRun(){
      this.changeLoading()
      const {data: dataAppRun} = await supabase.auth.getUser()
      if (dataAppRun.user !== null){
        this.userDetails.id = dataAppRun.user.id 
        this.userDetails.email = dataAppRun.user.email 
        // this.logIn(dataAppRun[0].user.id, dataAppRun[0].user.email ,dataAppRun[0].user.login ,dataAppRun[0].user.user_id)
        const { data: checkUserExistsData, error: checkUserExistsError } = await supabase
          .from('users')
          .select()
          .eq('email', this.userDetails.email )
        if(checkUserExistsData){
          this.logIn(checkUserExistsData[0].id, checkUserExistsData[0].email ,checkUserExistsData[0].login ,checkUserExistsData[0].user_id)
        }
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