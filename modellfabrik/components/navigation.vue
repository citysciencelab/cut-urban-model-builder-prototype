<template>
  <v-navigation-drawer width="120" justify-center permanent style="border: 0">
    <v-card class="d-flex flex-column justify-top align-center" width="100%" height="100%" color="#ffffff" flat>
      
      <v-list lines="two">
        <v-img src="/img/Logo_Small.png" width="60"  class="mt-5 mb-10"></v-img>
        <v-list-item v-for="item in navigationItems" :key="item.title" :to="item.to" :prepend-icon="item.icon"
          :value="item.title" :color="item.color" class="mb-2" width="60px" slim link>
        </v-list-item>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

    
<script>
export default {
  data() {
    return {
      navigationItems: [
        { title: "Home", icon: "mdi-home", to: "/", color: "#a6c1e6" },
        { title: "Modell", icon: "mdi-shape", to: "/model", color: "#f8aa36" },
        {
          title: "Bibliothek",
          icon: "mdi-library",
          to: "/library",
          color: "#7abf85",
        },
        {
          title: "Szenario-Explorer",
          icon: "mdi-sun-compass",
          to: "/scenario",
          color: "#475166",
        },
        {
          title: "Kollaboration",
          icon: "mdi-account-group-outline",
          to: "/collaboration",
          color: "#c3a9cf",
        },
      ],
    };
  },
};
</script>

<style scoped></style>