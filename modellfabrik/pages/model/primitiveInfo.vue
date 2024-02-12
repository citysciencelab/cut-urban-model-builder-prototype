<template>
    <v-card v-if="store.getSelectedPrimitive !== null" color="white" elevation="1" style="height: 500px;">
        <v-card-item class="ma-0">
            <v-card-subtitle>
                    {{ store.getSelectedPrimitive.constructor.name }}
            </v-card-subtitle>
            <v-card-title>
                <v-text-field variant="solo-filled" v-model="store.getSelectedPrimitive.name">
                </v-text-field>
                <v-textarea variant="solo-filled" v-model="store.getSelectedPrimitive.note" rows="2"></v-textarea>
            </v-card-title>

        </v-card-item>

        
        <v-card-text v-if="store.getSelectedPrimitive.constructor.name == 'Stock'">
            <v-row>
                <v-col>
                    <v-text-field v-model="store.getSelectedPrimitive.initial" label="Initial" type="number"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-switch v-model="store.getSelectedPrimitive.nonNegative" label="Allow negatives"></v-switch>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field  v-model="store.getSelectedPrimitive.delay" label="Delay" type="number"></v-text-field >
                </v-col>
            </v-row>
        </v-card-text>

        <v-card-text v-if="store.getSelectedPrimitive.constructor.name == 'Variable'">
            <v-row>
                <v-col>
                    <v-text-field v-model="store.getSelectedPrimitive.value" label="Wert"></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>

    </v-card>
</template>

<script setup>
import { useModelStore } from './index.vue';

const store = useModelStore();

</script>

