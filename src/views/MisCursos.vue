<template>
    <v-parallax
    dark
    src="https://www.bumeran.com.mx/noticias/wp-content/uploads/2016/11/porta1.png"
    height="1000" width="1980"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <v-card width="930" class="mx-auto mt-5">
        <h1 class="subheading">Esta es la lista de cursos que posee</h1>
        </v-card>
      </v-col>
    </v-row>
<v-row>
  <v-col cols="12" sm="6" offset-sm="3">
    <v-card>
      <v-subheader inset>Cursos</v-subheader>
        <div v-for="(curso, index) in cursos" :key="index">
          
          <v-list-item v-for="(curso2, index2) in curso" :key="index2"  link>
            
            <v-list-item-content v-if="(curso2.docente == currentUser.id)">
              <v-list-item-title>Nombre: {{ curso2.nombre}}</v-list-item-title>
              <v-list-item-subtitle>Id: {{ curso2._id  }}</v-list-item-subtitle>
              <v-list-item-subtitle>Docente: {{ curso2.docente  }}</v-list-item-subtitle>
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
import DocenteService from '../services/docentes.service';
  export default {
    data () {
    
        return {
        dialog: false,
        cursos: [],
        cursos2: [],
        docentes: []
      }
    
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
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