<template>
  <div class="team">
    <h1 class="subheading grey--text">Executives Page</h1>

    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" :alt="person.name" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions justify-space-around>
              <v-tooltip top>
                <v-btn fab color="grey" small slot="activator">
                  <v-icon small>message</v-icon>
                </v-btn>
                <span>Send a Message</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Sherif Usman",
          role: "President",
          avatar: "/avatar-1.png"
        },
        {
          name: "Ofori Theresa",
          role: "Vice President",
          avatar: "/avatar-3.png"
        },
        {
          name: "Nana Something ",
          role: "Financial Secretary",
          avatar: "/avatar-2.png"
        },

        {
          name: "Nbia Gyang",
          role: "Socials",
          avatar: "/avatar-4.png"
        },
        { name: "Yoshi", role: "Sales guru", avatar: "/avatar-5.png" }
      ]
    };
  }
};
</script>
