<template>
  <v-parallax
    dark
    src="../assets/FondoPaisaje.jpg"
    height="1080" width="1920"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="subheading">Estos son los docentes</h1>
      </v-col>
    </v-row>
<v-row>
  <v-col cols="12" sm="6" offset-sm="3">
    <v-card>
      <v-subheader inset>Docentes</v-subheader>
          <v-list-item v-for="(docente, index) in docentes" :key="index" link>
            <v-list-item-content>
          <v-list-item-title>id: {{ docente._id }}</v-list-item-title>
          <v-list-item-subtitle>nombre: {{ docente.nombre }}</v-list-item-subtitle>
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
import DocenteService from '../services/docentes.service';

  export default {
    data () {
      return {
        dialog: false,
        docentes: []
      }
    },
    mounted() {
      DocenteService.getDocentes().then(Response => {
        console.log(Response.data)
        this.docentes = Response.data;
      })
    }
  }
</script>