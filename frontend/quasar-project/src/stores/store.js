import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl:'http://localhost:3000',
  }),
  getters: {
  },
  actions: {
  },
});
