<template>
    <v-card color="cut-orange" variant="tonal">
        <v-row>
            <v-col cols="8" >
                <v-card-actions>
                    <v-btn color="cut-grey" slim icon="mdi-variable" density="compact" @click="store.addVariable" />
                    <v-btn color="cut-grey" slim icon="mdi-alpha-s-box" density="compact" @click="store.addStock" />

                    <v-divider vertical class="ml-3"></v-divider>

                    <v-btn :color="store.getLinkModeColor" slim icon="mdi-link-plus" density="compact" @click="store.toggleLinkMode"/>

                    <v-divider vertical class="ml-3"></v-divider>

                    <v-btn color="cut-grey" slim icon="mdi-database-plus" density="compact" />

                </v-card-actions>
            </v-col>
            <v-col cols="4" class="d-flex flex-row-reverse">
                <v-card-actions>
                    <v-btn prepend-icon="mdi-play-box" variant="outlined" bg-color="white" color="black" class="justify-end" @click="store.runSimulation">Simulation starten</v-btn>
                </v-card-actions>
            </v-col>

        </v-row>

    </v-card>
</template>

<script setup>
import { useModelStore } from './index.vue';

const store = useModelStore();

</script>

<script>

export default {
    data() {
        return {
            primitive: {
                name: "stf"
            }
        };
    }
};

</script>
