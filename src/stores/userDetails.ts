import { defineStore } from 'pinia'

export const useCounterStore = defineStore('userDetails', {
  state: () => ({
    userDetails: {
      id: null,
      login: null,
      email: null,
    },
  }),
  actions: {
    logIn(dataSignUp, dataLogIn) {
      this.userDetails = {
        id: dataSignUp.user.id,
        email: dataSignUp.user.email,
        login: dataLogIn}
    },
  //   // logOut() {
  //   //   this.count++
  //   // }
  // },
}})