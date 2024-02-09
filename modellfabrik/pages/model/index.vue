<template>
    <ClientOnly>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h1>Model</h1>

                </v-col>
                <v-col cols="12">
                    <ModelToolbar />
                </v-col>
                <v-col cols="8">
                    <ModelCanvas />
                </v-col>
                <v-col cols="4">
                    <PrimitiveInfo />
                </v-col>
            </v-row>
        </v-container>
    </ClientOnly>
</template>

<script setup>
import ModelCanvas from './modelCanvas.vue';
import ModelToolbar from './modelToolbar.vue';
import PrimitiveInfo from './primitiveInfo.vue';
import ModelCanvasJsPlumb from './modelCanvasJsPlumb.vue';
import ModelCanvasFabric from './modelCanvasFabric.vue';

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

        selectedPrimitive: null,

    }),
    getters: {
        // Define your getters here
        getPrimitives() {
            console.log(this.model.find());
            return this.model.find();
        },
        getSelectedPrimitive() {
            return this.selectedPrimitive;
        }
        
    },
    actions: {
        // Define your actions here

        setModel(model) {
            this.model = model;
        },
        updateSelectedPrimitive(primitive) {
            this.selectedPrimitive = primitive;
        },
        addStock(name, initial) {
            this.model.Stock({ name: name, initial: initial });
        },
        addVariable(name, value) {
            this.model.Variable({ name: name, value: value });
        },
        loadModel(url) {
            //this.model = loadInsightMaker(modeltext.text());
        }
    },
});



export default {

}
</script>
