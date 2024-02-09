<template>
    <ClientOnly>
        <v-card color="white" elevation="1" style="height: 500px" name="canvas">



        </v-card>
    </ClientOnly>
</template>


<script setup>
import { useModelStore } from './index.vue';


const store = useModelStore();

</script>


<script>
import { ready, newInstance } from "@jsplumb/browser-ui"

export default {
    mounted() {

        ready(() => {
            newInstance({
                container: "canvas",
                connector: "Flowchart",
                paintStyle: { strokeWidth: 2, stroke: "rgb(132, 17, 11)" },
                hoverPaintStyle: { strokeWidth: 3, stroke: "rgb(132, 17, 11)" },
                endpoint: "Blank",
                anchor: "Continuous",
                overlays: [
                    ["Arrow", { location: 1, width: 10, length: 10 }]
                ]
            });
        });

    }
};

</script>