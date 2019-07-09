<template>
  <div class="home">
    <h1 class="subheading grey--text">Home Page</h1>

    <v-container grid-list-xs>
      <p
        class="red white--text"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolor non totam, mollitia perspiciatis officia et. Dicta repudiandae nemo enim cupiditate odit quo cum, doloremque rerum expedita excepturi, velit obcaecati.</p>
      <p
        class="pink lighten-4 red--text text--darken-4"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, magnam.</p>
      <h1 class="display-4">Massive Display</h1>
      <h2 class="display-3">Smaller size</h2>
      <h3 class="display-2">A bit smaller</h3>

      <v-btn class="pink darken-2 white--text">Click Me</v-btn>
      <v-btn depressed color="pink">Click agian</v-btn>
      <v-btn flat color="pink">Click Flat</v-btn>

      <v-btn depressed class="pink white--text btn">
        <v-icon left>email</v-icon>
        <span>Email Me</span>
      </v-btn>

      <v-btn depressed small class="pink white--text btn">
        <v-icon left small>email</v-icon>
        <span>Email Me</span>
      </v-btn>

      <v-btn depressed large class="pink white--text btn">
        <span>Email Me</span>
        <v-icon right large>email</v-icon>
      </v-btn>

      <v-btn fab depressed small dark color="purple">
        <v-icon small>favorite</v-icon>
      </v-btn>

      <v-btn class="hidden-sm-and-down" fab depressed small dark color="purple">
        <v-icon small>favorite</v-icon>
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 20px;
}
</style>

