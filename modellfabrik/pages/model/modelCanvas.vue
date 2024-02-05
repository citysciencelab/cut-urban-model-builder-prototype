<template>
<v-card color="white" elevation="1" style="height: 500px">
    <v-stage :config="configKonva">
    <v-layer>
      <v-circle :config="configCircle" draggable="true"></v-circle>
    </v-layer>
  </v-stage>
</v-card>


</template>

<script>

const width = window.innerWidth;
const height = window.innerHeight;

export default {
  data() {
    return {
      configKonva: {
        width: width,
        height: height
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