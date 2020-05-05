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
        <h1 class="subheading">¿Encontró el curso que quiere?</h1>
      </v-col>
    </v-row>
<v-row>
  <v-col cols="12" sm="6" offset-sm="3">
    <v-card>
      <v-subheader inset>Cursos</v-subheader>
        <div v-for="(curso, index) in cursos" :key="index">
          <v-list-item v-for="(curso2, index2) in curso" :key="index2" link>
            <v-list-item-content v-if="curso2._id != null">
          <v-list-item-title>id: {{ curso2._id }}</v-list-item-title>
          <v-list-item-subtitle>nombre: {{ curso2.nombre }}</v-list-item-subtitle>
        </v-list-item-content>
      <v-list-item-action>
        <v-btn icon>
          <v-icon color="grey lighten-1">mdi-information</v-icon>
        </v-btn>
      </v-list-item-action>
      </v-list-item>
      </div>
    </v-card>
  </v-col>
</v-row>
</v-parallax>
</template>

<script>
import CursoService from '../services/cursos.service';

  export default {
    data () {
      return {
        dialog: false,
        cursos: [],
        cursos2: []
      }
    },
    mounted() {
      CursoService.getCursos().then(Response => {
        console.log(Response.data)
        this.cursos = Response.data;
      })
    }
  }
</script>