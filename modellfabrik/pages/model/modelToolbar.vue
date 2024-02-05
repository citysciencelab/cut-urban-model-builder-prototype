<template>

    <v-card color="cut-orange" variant="tonal">
        <v-card-actions>
            <v-btn color="cut-grey" slim icon="mdi-variable" density="compact" @click="store.addPrimitive(primitive)" />
            <v-btn color="cut-grey" slim icon="mdi-database-plus" density="compact" />
        </v-card-actions>
        
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
