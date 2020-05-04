<template>
  <v-parallax
    dark
    src="../assets/FondoPaisaje.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="subheading">¿Encontró el curso que quiere?</h1>
      </v-col>
    </v-row>

  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <p class="display-1 text--primary">
        Cursos
      </p>
      <div class="text--primary">
        En este apartado usted verá los cursos que tenemos
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Ver cursos
      </v-btn>
    </v-card-actions>
  </v-card>
<v-divider inset></v-divider>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
  <v-subheader inset>Folders</v-subheader>
    <v-list-item v-for="item in items" :key="item.title" link>
      <v-list-item-avatar>
        <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
      <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn icon>
          <v-icon color="grey lighten-1">mdi-information</v-icon>
        </v-btn>
      </v-list-item-action>
      </v-list-item>
    </v-card>
  </v-col>
</v-row>
  </v-parallax>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        items: [
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' },
        ],
        items2: [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' },
        ],
      }
    },
  }
</script>