<template>
  <v-parallax
    dark
    src="../assets/Docentes.jpg"
    height="700" width="1980"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <v-card width="930" class="mx-auto mt-5">
        <h1 class="subheading">Estos son los docentes</h1>
        <h2>Consulta los docentes que se encuentran con nosotros</h2>
        </v-card>
      </v-col>
    </v-row>
<v-row>
  <v-col cols="12" sm="6" offset-sm="3">
    <v-card>
      <v-subheader inset>Docentes</v-subheader>
          <v-list-item v-for="(docente, index) in docentes" :key="index" link>
            <v-list-item-content>
          <v-list-item-title>Nombre: {{ docente.nombre}}</v-list-item-title>
          <v-list-item-subtitle>Id: {{ docente._id  }}</v-list-item-subtitle>
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