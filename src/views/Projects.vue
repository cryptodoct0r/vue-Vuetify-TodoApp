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
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Neni Emsu",
          due: "21st July 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Design a Yet another website for Nugs",
          person: "Neni Emsu",
          due: "1st August 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        }
      ]
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === "Neni Emsu";
      });
    }
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

