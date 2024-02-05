<template>
    <ClientOnly>
        <v-card color="white" elevation="1" style="height: 500px">
            <v-stage :config="configKonva">
                <v-layer>
                    
                    <v-circle v-for="primitive in store.primitives"   :config="configCircle" draggable="true"></v-circle>
                </v-layer>
            </v-stage>
        </v-card>
    </ClientOnly>
</template>


<script setup>
import { useModelStore } from './index.vue';

const store = useModelStore();

</script>


<script>


export default {
    data() {
        return {
            configKonva: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            configCircle: {
                x: 100,
                y: 100,
                radius: 70,
                fill: "red",
                stroke: "black",
                strokeWidth: 4
            }
        };
    }
};

</script>