import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  state: () =>( {
    count: 0
  }),
  actions: {
    increaseCount () {
      this.count++
    }
  },
  getters: {
    returnCount: () => {
      return this.count
    }
  }
})
