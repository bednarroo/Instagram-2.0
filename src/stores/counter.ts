import { defineStore } from 'pinia'

export const useCounterStore = defineStore('userDetail', {
  state: () => ({
    userDetail: {
      id: null,
      login: null,
      email: null,

    },
  }),
  actions: {
    logIn() {
      this.count++
    },
    logOut() {
      this.count++
    },
    SignIn() {
      this.count++
    },
  },
})