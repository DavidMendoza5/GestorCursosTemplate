<template>
  <v-parallax
    dark
    src="../assets/VerCursos.png"
    height="1000" width="1980">
    <v-row
      align="center"
      justify="center">
      <v-col class="text-center" cols="12">
        <v-card width="930" class="mx-auto mt-5">
        <h1 class="subheading">¿Encontró el curso que quiere?</h1>
        <h2 class="black--text">Consulta los cursos que tenemos disponibles actualmente</h2>
        </v-card>
      </v-col>
    </v-row>
<v-row>
  <v-col cols="12" sm="6" offset-sm="3">
    <v-card>
      <v-toolbar flat color="grey darken-4">
        <v-toolbar-title class="font-weight-light white--text ml-6">Historial de cursos</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
        <div v-for="(curso, index) in cursos" :key="index">
          <v-list-item v-for="(curso2, index2) in curso" :key="index2" link>
            <v-list-item-content v-if="curso2._id != null">
          <v-list-item-title>Curso {{ curso2.nombre}}</v-list-item-title>
          <v-list-item-subtitle>ID {{ curso2._id  }}</v-list-item-subtitle>
          <v-list-item-subtitle>Docente {{ curso2.docente  }}</v-list-item-subtitle>
        </v-list-item-content>
      <v-list-item-action>
        <v-btn small color="primary" to="/crearComentario">
          comentario
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