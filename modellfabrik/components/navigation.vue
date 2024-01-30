<template>
  <v-navigation-drawer
    height="100vh"
    border="0"
    drawer

  >
    <v-sheet class="pa-4" dark>
      <v-img src="/img/Logo_Small.png" max-height="100px" contain></v-img>
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-sheet>

    <v-list nav>
      <v-list-item
        v-for="item in navigationItems"
        :key="item.title"
        :to="item.to"
        link
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.title"
        class="pa-3"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

    
    <script>
export default {
  data() {
    return {
        rail: true,
      navigationItems: [
        { title: "Home", icon: "mdi-home", to: "/", color:"#a6c1e6" },
        { title: "Modell", icon: "mdi-shape", to: "/model", color:"#f8aa36"},
        { title: "Bibliothek", icon: "mdi-library", to: "/library", color:"#7abf85"},
        {
          title: "Szenario-Explorer",
          icon: "mdi-sun-compass",
          to: "/scenario",
            color:"#475166"
        },
        {
          title: "Kollaboration",
          icon: "mdi-account-group-outline",
          to: "/collaboration",
            color:"#c3a9cf"
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-list-item {
  margin: 15px;
}
</style>