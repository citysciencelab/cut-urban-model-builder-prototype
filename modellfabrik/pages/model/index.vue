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
import { defineStore } from 'pinia';
import { Model, loadInsightMaker } from 'simulation';


export const useModelStore = defineStore('model', {
    state: () => ({
        // Define your state properties here
        model: new Model({
                timeStart: 2020,
                timeLength: 100,
                timeUnits: "Years"
            }),
        
        primitives: [],

    }),
    getters: {
        // Define your getters here
        getVariables() {
            return this.model.findVariables();
        },
        getStocks() {
            return this.model.findStocks();
        }
    },
    actions: {
        // Define your actions here
        addPrimitive(primitive) {
            this.primitives.push(primitive);
        },
        removePrimitive(primitive) {
            this.primitives = this.primitives.filter(p => p !== primitive);
        },
        setModel(model) {
            this.model = model;
        },
        addStock(name, initial) {
            this.model.Stock({name: name, initial: initial});
        },
        addVariable(name, value) {
            this.model.Variable({name: name, value: value});

        },
        loadModel(url){
            //this.model = loadInsightMaker(modeltext.text());
        }
    },
});



export default {

}
</script>
