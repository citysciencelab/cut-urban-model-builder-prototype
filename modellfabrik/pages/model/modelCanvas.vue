<template>
    <ClientOnly>
        <v-card color="white" elevation="1" style="height: 500px">
            <v-stage :config="configKonva" @mousedown="handleStageMouseDown" @touchstart="handleStageMouseDown">
                
                <v-layer>
                    <v-text v-if="store.linkMode" :config="{text: 'Some text on canvas', fontSize: 15}"/>



                    
                    <v-shape v-for="primitive in store.getPrimitives" :config="store.getPrimitiveStyle(primitive)" draggable="true" 
                        :name="primitive.id" @click="store.updateSelectedPrimitive(primitive)" @dragstart="store.updateSelectedPrimitive(primitive)">
                    </v-shape>

                    
                    <v-transformer ref="transformer" />
                </v-layer>
            </v-stage>
        </v-card>
    </ClientOnly>
</template>



<script>
import { useModelStore } from './index.vue';

const width = window.innerWidth;
const height = window.innerHeight;

export default {
    setup() {
        const store = useModelStore(); 
        return { store }
    },
    data() {
        return {
            configKonva: {
                width: width,
                height: height            },
            configCircle: {
                x: 100,
                y: 100,
                radius: 70,
                fill: "red",
                stroke: "black",
                strokeWidth: 4
            },
            configRect: {
                x: 100,
                y: 100,
                fill: "green",
                stroke: "black",
                strokeWidth: 4
            },
            selectedShapeName: '',
        };
    },
    methods: {


        handleStageMouseDown(e) {
            // clicked on stage - clear selection
            if (e.target === e.target.getStage()) {
                this.selectedShapeName = '';
                this.updateTransformer();
                this.store.updateSelectedPrimitive(null)
                return;
            }

            // clicked on transformer - do nothing
            const clickedOnTransformer =
                e.target.getParent().className === 'Transformer';
            if (clickedOnTransformer) {
                return;
            }

            // find clicked rect by its name
            const name = e.target.name();
            this.selectedShapeName = name;

            this.updateTransformer();
        },
        updateTransformer() {
            // here we need to manually attach or detach Transformer node
            const transformerNode = this.$refs.transformer.getNode();
            const stage = transformerNode.getStage();
            const { selectedShapeName } = this;

            const selectedNode = stage.findOne('.' + selectedShapeName);

            // do nothing if selected node is already attached
            if (selectedNode === transformerNode.node()) {
                return;
            }

            if (selectedNode) {
                // attach to another node
                transformerNode.nodes([selectedNode]);
            } else {
                // remove transformer
                transformerNode.nodes([]);
            }
        },
    }
};

</script>