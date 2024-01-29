<template>

        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
          height="100vh"
        >
        <v-img
            src="/img/Logo_Small.png"
            max-height="100px"
            contain
            class="mx-auto"
            ></v-img>



          <v-list-item
            title="Modellfabrik"
            nav
          >
            <template v-slot:append>
              <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-shape" title="Modell" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-library" title="Bibliothek" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-sun-compass" title="Szenario-Explorer" value="account"></v-list-item>
            <!--<v-list-item prepend-icon="mdi-toy-brick-marker" title="My Account" value="account"></v-list-item>--->
            <v-list-item prepend-icon="mdi-account-group-outline" title="Kollaboration" value="users"></v-list-item>
          </v-list>
        </v-navigation-drawer>

  </template>

  
  <script>
    export default {
      data () {
        return {
          drawer: true,
          rail: true,
        };
      },
    }
  </script>

<style scoped>

</style>