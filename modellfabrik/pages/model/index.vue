<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1>Model</h1>

            </v-col>
            <v-col cols="12">
                <ModelToolbar />
                
            </v-col>
            <v-col cols="12">
                <ModelCanvas />
            </v-col>
        </v-row>
    </v-container>

</template>

<script setup>
import ModelCanvas from './modelCanvas.vue';
import ModelToolbar from './modelToolbar.vue';




</script>

<script>
export default {
    head() {
        return {
            title: 'Model'
        }
    }
}
</script>
