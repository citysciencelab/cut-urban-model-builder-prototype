<template>
    <ClientOnly>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <h1>Model</h1>

                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <ModelToolbar />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="9">
                    <ModelCanvas />
                </v-col>
                <v-col cols="3">
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
        results: [],
        selectedPrimitive: null,
        linkMode: false,

        variableStyle: {

            sceneFunc: function (context, shape) {
                context.beginPath();
                context.ellipse(40, 20, 40, 20, 0, 0, 2 * Math.PI); 
                context.closePath();
                // (!) Konva specific method, it is very important
                context.fillStrokeShape(shape);
            },
            fill: "white",
            stroke: "black",
            strokeWidth: 2,
            width: 80,
            height: 40,
        },
        stockStyle: {
            sceneFunc: function (context, shape) {
                context.beginPath();
                context.moveTo(0, 0);
                context.lineTo(200, 0);
                context.lineTo(200, 50);
                context.lineTo(0, 50);
                context.closePath();
                // (!) Konva specific method, it is very important
                context.fillStrokeShape(shape);
            },
            fill: "#FAFAFA",
            stroke: "black",
            strokeWidth: 2,
            width: 200,
            height: 50
        }

    }),
    getters: {
        // Define your getters here
        getPrimitives() {
            return this.model.find();
        },
        getSelectedPrimitive() {
            return this.selectedPrimitive;
        },
        getLinkModeColor() {
            return this.linkMode ? "cut-orange" : "cut-grey";
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
        addStock() {
            this.selectedPrimitive = this.model.Stock({ name: "Neuer Stock" });
        },
        addVariable() {
            this.selectedPrimitive = this.model.Variable({ name: "Neue Variable" });
        },
        addFlow() {
            this.selectedPrimitive = this.model.Flow({ name: "Neuer Flow" });
        },
        addLink(from, to) {
            this.selectedPrimitive = this.model.Link(from, to, { name: "Neuer Link" });
        },
        loadModel(url) {
            //this.model = loadInsightMaker(modeltext.text());
        },
        getPrimitiveStyle(primitive) {

            let style = {};

            if (primitive.constructor.name === "Stock") {
                style =  this.stockStyle;
            } else if (primitive.constructor.name === "Variable") {
                style =   this.variableStyle;
            } 

            if (this.linkMode) {
                style.stroke = "#f8aa36";
                style.strokeWidth = 5;
            } else {
                style.stroke = "black";
                style.strokeWidth = 2;
            }

            return style
        },
        toggleLinkMode() {
            this.linkMode = !this.linkMode;
        },
        runSimulation() {
            this.results.push(this.model.simulate());
            console.log(this.results);
        },
        deleteModel() {
            this.model = new Model({
                timeStart: 2020,
                timeLength: 100,
                timeUnits: "Years"
            });
        }
    },
});



export default {

}
</script>
