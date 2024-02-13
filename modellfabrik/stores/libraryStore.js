import { defineStore } from 'pinia';

export const useLibraryStore = defineStore('libraryStore', {
  // state
  state: () => ({
    modelList: [],
  }),

  // getters
  getters: {
    getModelList() {
      return this.modelList;
    }
  },

  // actions
  actions: {
    loadModelList() {

      fetch('https://ump.cut.hcu-hamburg.de/api/processes/')
        .then(response => response.json())
        .then(data => {
          this.modelList = data.processes;
        })
        .catch(error => {
          // handle error
        });
    }
  },
});

