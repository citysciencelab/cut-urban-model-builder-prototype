<template>
    <ClientOnly>
        <v-card color="white" elevation="1" style="height: 500px" name="canvas">
            <canvas  id="c"></canvas>
        </v-card>
    </ClientOnly>
</template>


<script setup>
import { useModelStore } from './index.vue';

const store = useModelStore();

</script>


<script>

export default {

    mounted() {

        if (process.client) {


            // Initialize Fabric.js canvas
            this.canvas = new fabric.Canvas("c", {
                // Fabric.js canvas options here (e.g., height and width)
                width: 300,
                height: 600,
            });

            // Example: Add a rectangle to the canvas
            const rect = new fabric.Rect({
                left: 100,
                top: 100,
                fill: 'red',
                width: 20,
                height: 20,
            });

            this.canvas.add(rect);
        }
    },

    beforeDestroy() {
        // Cleanup: dispose of the canvas to free up resources
        this.canvas.dispose();
    },

};

</script>