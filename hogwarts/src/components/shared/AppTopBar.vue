<template>
    <div>
        <v-app-bar
            color="blue-grey darken-4"
            app
            dark
            
            >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>Hogwarts</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-wizard-hat</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-auto-fix</v-icon>
            </v-btn>

        
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
          <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="blue-grey lighten-1"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-auto-fix</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Grifinória</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-auto-fix</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sonserina</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-auto-fix</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Lufa-Lufa</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-auto-fix</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Corvinal</v-list-item-title>
            </v-list-item>

          </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    name: 'App',
    data: () => ({
      drawer: false,
      group: null,
    }),
}
</script>