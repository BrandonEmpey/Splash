<template>
  <v-app id="example-3" toolbar>
    <v-navigation-drawer permanent floating light class="transparent">
      <v-card class="ma-5">
        <v-list dense class="py-0">
          <v-list-tile v-for="item in items" :key="item.title">
            <v-list-tile-action>
              <v-icon blue--text class="blue--text">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <v-toolbar class="primary">
      <v-toolbar-title class="white--text">Toolbar</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import VCardMedia from "vuetify/src/components/cards/VCardMedia";
  import Login from "./components/Login.vue";

  export default {
    components: {VCardMedia, Login},
    data () {
      return {
        items: [
          { icon: 'pool', title: 'Swimming Pool'},
          {icon: 'hot_tub', title: 'Fiberglass Spas'},
          {icon: 'hot_tub', title: 'Bullfrog Spas'}
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',

        ex11: true,
        ex12: false,
        ex13: true,
        ex14: false,
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'

</style>
