<template>
  <nav>
    <v-snackbar v-model="snackbar" top color="success" :timeout="4000">
      <span>That's Awesome just added a new Project</span>
      <v-btn flat color="white" @click="snackbar = false">close</v-btn>
    </v-snackbar>
    <v-toolbar app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <router-link class="black--text" to="/">
          <span class="font-weight-light">Nugs</span>
          <Span>Ternopil</Span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <v-btn flat slot="activator" color="grey">
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-title>{{link.text}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <ThePopUp @projectAdded="snackbar = true" />

      <!-- <v-btn flat color="grey">
         <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon> 
       
      </v-btn>-->
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" class="primary" app>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100" class="grey lighten-2">
            <img src="/nugslogo.png" alt />
          </v-avatar>
          <p class="white--text subheading my-2">Nugs Ternopil</p>
        </v-flex>
        <v-flex class="my-1">
          <ThePopUp @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import ThePopUp from "./ThePopUp";
export default {
  components: { ThePopUp },
  data() {
    return {
      drawer: false,
      links: [
        {
          icon: "home",
          text: "Home",
          route: "/"
        },
        {
          icon: "folder",
          text: "Online Libs",
          route: "/Library"
        },
        {
          icon: "supervisor_account",
          text: "Executives",
          route: "/Executives"
        },
        {
          icon: "collections",
          text: "Gallery",
          route: "/Gallery"
        },
        {
          icon: "info",
          text: "News & Events",
          route: "/News&Events"
        }
      ],
      snackbar: true
    };
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
