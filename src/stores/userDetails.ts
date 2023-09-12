import { defineStore } from 'pinia'

export const useCounterStore = defineStore('userDetails', {
  state: () => ({
    userDetails: null
    //  {
    //   id: null,
    //   login: null,
    //   email: null,
    // },
  }),
  actions: {
    logIn(logIn) {
      this.userDetails = logIn
    },
  //   // logOut() {
  //   //   this.count++
  //   // }
  // },
})
