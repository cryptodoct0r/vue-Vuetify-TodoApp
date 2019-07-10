<template>
  <v-dialog max-width="600px">
    <v-btn slot="activator" color="success">Add a project</v-btn>
    <v-card>
      <v-card-title>Add a new project</v-card-title>
      <v-card-text>
        <v-form ref="form" class="px-3">
          <v-text-field
            label="Title"
            :value="title"
            v-model="title"
            prepend-icon="folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Information"
            :value="info"
            v-model="info"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>
          <v-menu>
            <v-text-field
              :value="formattedDate"
              slot="activator"
              label="Due Date"
              prepend-icon="date_range"
              :rules="inputRules"
            ></v-text-field>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
export default {
  data() {
    return {
      title: "",
      info: "",
      due: null,
      inputRules: [
        v => !!v || "Title is required",
        v => v.length >= 3 || "Minimum length is 3 characters"
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.info, this.formattedDate);
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  }
};
</script>

<style>
</style>
