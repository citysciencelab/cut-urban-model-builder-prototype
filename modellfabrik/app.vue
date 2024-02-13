<template>
  <div class="app">
    <NuxtLayout>
      
    </NuxtLayout>
  </div>
</template>

<script>
import { useLibraryStore } from '../stores/libraryStore.js';

export default {
    setup() {
        const libraryStore = useLibraryStore();
        return {
            libraryStore 
         }
    },
    mounted() {
        this.libraryStore.loadModelList()
    }
}



</script>

