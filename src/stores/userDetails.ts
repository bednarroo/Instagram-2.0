import { defineStore } from 'pinia'

export const useCounterStore = defineStore('userDetails', {
  state: () => ({
    userDetails: {
      id: null,
      login: null,
      email: null,
    },
  }),
  // actions: {
  //   logIn(logIn: object) {
  //     this.userDetails = logIn
  //   },
  //   // logOut() {
  //   //   this.count++
  //   // }
  // },
})
