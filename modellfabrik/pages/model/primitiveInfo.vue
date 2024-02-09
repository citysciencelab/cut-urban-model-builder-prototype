<template>
    <v-card v-if="store.getSelectedPrimitive !== null" color="white" elevation="1" style="height: 500px;">
        <v-card-item>
            <v-card-subtitle>{{ store.getSelectedPrimitive.constructor.name }}</v-card-subtitle>
            <v-card-title>{{ store.getSelectedPrimitive.name }}</v-card-title>
        </v-card-item>
        <v-card-text>
            <v-row>
                <v-col>
                    <v-text-field v-model="store.getSelectedPrimitive.name" label="Name"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="store.getSelectedPrimitive.initial" label="Initial"></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script setup>
import { useModelStore } from './index.vue';

const store = useModelStore();

</script>

