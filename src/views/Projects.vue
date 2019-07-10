<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects page</h1>

    <v-container grid-list-xs>
      <v-expansion-panel>
        <v-expansion-panel-content
          v-for="project in myProjects"
          :key="project.title"
          :class="`mb-1 project ${project.status}`"
        >
          <template v-slot:header>
            <div>{{project.title}}</div>
          </template>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">Due on {{project.due}}</div>
              <div>{{project.content}}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <div class="mt-4">
        <h2 class="my-2">All projects in from all users</h2>
        <v-expansion-panel>
          <v-expansion-panel-content
            v-for="project in projects"
            :key="project.title"
            :class="`mb-1 project ${project.status}`"
          >
            <template v-slot:header>
              <div>{{project.title}}</div>
            </template>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">Due on {{project.due}}</div>
                <div>{{project.content}}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </div>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";
export default {
  data() {
    return {
      projects: []
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === "Neni Emsu";
      });
    }
  },
  created() {
    db.collection("projects").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.project {
  &.complete {
    border-left: 4px solid #3cd1c2;
  }
  &.ongoing {
    border-left: 4px solid orange;
  }
  &.overdue {
    border-left: 4px solid tomato;
  }
}

.v-chip {
  &.complete {
    background-color: #3cd1c2;
  }
  &.ongoing {
    background-color: orange;
  }
  &.overdue {
    background-color: tomato;
  }
}
</style>

