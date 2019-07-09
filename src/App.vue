<template>
  <v-app class="grey lighten-4">
    <TheNavbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
export default {
  name: "App",
  components: { TheNavbar },
  data() {
    return {
      //
    };
  }
};
</script>
