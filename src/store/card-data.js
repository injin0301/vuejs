import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useCardDataStore = defineStore('card-data', {
    state: () => ({ 
      count: 0
    }),
    actions: {
        addQuestions(questions) {
          this.state = questions;
          console.log(this.state);
        },
    },
    getters: {
      getCategories() {
        return this.categories
      }
    }
})

export const useQuestionsStore = defineStore('card-test', {
  id: 'questions',
  state: () => ({
    categories: JSON.parse(localStorage.getItem('categories')) || []
  }),
  actions: {
    setQuestions(categories) {
      this.categories = categories
      localStorage.setItem('categories', JSON.stringify(categories))
    }
  },
  getters: {
    getCategories() {
      return this.categories
    }
  }
})