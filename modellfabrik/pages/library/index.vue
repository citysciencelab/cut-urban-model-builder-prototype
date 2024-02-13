<template>
    <v-container>
        <v-row>
            <v-col cols="10">
                <h1>Bibliothek</h1>
            </v-col>
            <v-col cols="2">
                <v-btn @click="libraryStore.loadModelList" prepend-icon="mdi-refresh" color="cut-green-light" variant="tonal">Aktualisieren</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="model in libraryStore.modelList" cols="4">
                <v-card  :title="model.title" :text="model.description" variant="outlined">
                    <v-card-actions>
                        <v-btn>More</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import { useLibraryStore } from '../stores/libraryStore.js';

export default {
    setup() {

        const libraryStore = useLibraryStore()
        return {
            libraryStore
        }
    }
}



</script>