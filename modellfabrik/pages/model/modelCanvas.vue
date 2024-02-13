<template>
    <ClientOnly>
        <v-card color="white" elevation="1" style="height: 500px">
            <v-stage :config="configKonva" @mousedown="handleStageMouseDown" @touchstart="handleStageMouseDown">

                <v-layer>     

                    <v-group v-for="primitive in store.getPrimitives"  @click="store.updateSelectedPrimitive(primitive)" @dragstart="store.updateSelectedPrimitive(primitive)" :draggable="!store.linkMode" >

                        
                        
                        <v-shape :config="store.getPrimitiveStyle(primitive)" :name="primitive.id"  />
                        <v-text :config="{ text: primitive.name, fontSize: 15 }" />
                        <v-image v-if="store.linkMode" :config="{ image: linkImage, x: -25, y: 10, width: 20, height: 20 }" @click="handleNewLink(primitive)" />


                    </v-group>

                    <v-transformer ref="transformer" />
                </v-layer>
                <v-layer>
                    <v-line :config="this.lineConfig" />
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
                height: height
            },
            selectedShapeName: '',
            linkImage: null,
            newLink: [],
            lineConfig: {
                stroke: 'black',
                strokeWidth: 0,
                points: [0, 0, 100, 100],
            }
        };
    },
    created() {
        this.store.addVariable();
        this.store.addStock();
        
        const image = new window.Image();
        image.src = './img/link-img.png';
        image.onload = () => {
            this.linkImage = image;
        };

    },
    unmounted() {
        this.store.deleteModel();
    },
    methods: {
        handleNewLink(primitive){
            if (this.store.linkMode) {
                if (this.newLink.length === 0) {
                    this.newLink.push(primitive);
                    console.log(this.newLink);
                } else {
                    this.newLink.push(primitive);
                    console.log(this.newLink);
                    this.store.addLink(this.newLink[0], this.newLink[1]);
                    this.newLink = [];
                    this.store.toggleLinkMode();
                }
            }
        },
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