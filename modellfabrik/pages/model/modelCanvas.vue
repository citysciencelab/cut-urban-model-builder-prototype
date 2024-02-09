<template>
    <ClientOnly>

        <v-card color="white" elevation="1" style="height: 500px">
            <v-stage :config="configKonva" >
                <v-layer>
                    <v-circle v-for="primitive in store.getPrimitives" :config="configCircle" draggable="true" @transformend="handleTransformEnd"
                        :name="primitive.id" @click="store.updateSelectedPrimitive(primitive)">
                    </v-circle>
                    <v-transformer ref="transformer" />
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
        logPrimitives(primitive) {
            console.log(primitive.id)
            console.log(primitive.name)
            console.log(primitive.constructor.name)
        },
        handleTransformEnd(e) {
            // shape is transformed, let us save new attrs back to the node
            // find element in our state
            const rect = store.getPrimitives.find(
                (r) => r.id === this.selectedShapeName
            );
            // update the state
            rect.x = e.target.x();
            rect.y = e.target.y();
            rect.rotation = e.target.rotation();
            rect.scaleX = e.target.scaleX();
            rect.scaleY = e.target.scaleY();

            // change fill
            rect.fill = Konva.Util.getRandomColor();
        },
        handleStageMouseDown(e) {
            // clicked on stage - clear selection
            if (e.target === e.target.getStage()) {
                this.selectedShapeName = '';
                this.updateTransformer();
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
            const rect = store.getPrimitives.find((r) => r.name === name);
            if (rect) {
                this.selectedShapeName = name;
            } else {
                this.selectedShapeName = '';
            }
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