<template>
  <v-app>
    <v-banner>
      <v-layout>
        <v-form name="form" @submit.prevent="search(idCursos)"> 
          <v-layout>
            <v-flex class="ma-1">
              <v-card width="700" flat> <!--Elimina la elevación-->
                <v-text-field placeholder="Buscar" outlined rounded v-model="idCursos" name="Curso_Id"></v-text-field>
              </v-card>
            </v-flex>
            <v-flex>
              <v-card-actions>
                <v-btn class="mx-3" color="green" type="submit" large>Buscar curso</v-btn>
                <v-btn class="mx-3" color="blue" :disabled="!valid" to="/ModificarCurso" large>Actualizar datos</v-btn>
                <v-btn class="mx-3" color="red" :disabled="!valid" @click="eliminarCurso()" large>Eliminar</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
          <v-snackbar v-model="snackbar">
            Curso eliminado correctamente
            <v-btn color="blue" text @click="snackbar=false">cerrar</v-btn>
          </v-snackbar>
        </v-form>
        <v-flex class="ma-2 mx-12"><v-btn class="black--text" color="success" to="/CrearCurso" large>Crear curso</v-btn></v-flex>
      </v-layout>
    </v-banner>
    
    <div class="container" flat><h1 class="font-weight-regular mx-10">Mis cursos</h1></div>
    <v-divider></v-divider>

    <blockquote>
      <template v-if="buscar === true"> <!--Oculta la tarjeta-->
      <v-card class="mx-auto ma-8" max-width="494" outlined>
        <div v-for="(curso3,index) in cursos3" :key="index"> <!--Permite obtener los datos del curso-->
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular mb-4">Docente {{curso3.docente._id}}</v-list-item-title>
              <v-list-item-title class="headline mb-1">Curso {{curso3.nombre}}</v-list-item-title>
              <v-list-item-title class="mb-4">ID {{curso3._id}}</v-list-item-title>
              <v-list-item-title>Precio ${{curso3.precio}}</v-list-item-title>
              <v-list-item-title>Cupo límite {{curso3.cupoLimite}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-card>  
      </template>

      <template v-if="buscar === false">
        <v-card class="mx-auto ma-8" max-width="544" outlined>
          <v-toolbar flat color="grey darken-4">
            <v-toolbar-title class="font-weight-light white--text ml-10">Historial de cursos</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <div v-for="(curso, index) in cursos" :key="index">
            <v-list-item v-for="(curso2, index2) in curso" :key="index2"  link>
              <v-list-item-content v-if="(curso2.docente == currentUser.id)"> <!--Muestra solo cursos del docente-->
                <v-list-item-title>Curso {{ curso2.nombre}}</v-list-item-title>
                <v-list-item-subtitle>ID {{ curso2._id  }}</v-list-item-subtitle>
                <v-list-item-subtitle>Docente {{ curso2.docente  }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
              </v-list-item-action>    
            </v-list-item>
          </div>
        </v-card>
      </template>
    </blockquote>
  </v-app>
</template>

<script>
import CursoService from '../services/cursos.service';
import DocenteService from '../services/docentes.service';
  export default {
    data () {
        return {
        dialog: false,
        valid: false,
        cursos: [],
        cursos2: [],
        cursos3: [],
        docentes: [],
        idCursos: '',
        buscar: false,
        snackbar: false
      }
    
    },
    computed: {
      currentUser() {
          return this.$store.state.auth.user;
      }
    },
    mounted() {
        CursoService.getCursos().then(Response => {
        this.cursos = Response.data;
      })
    },
    methods:{
      search(id){
        CursoService.getCursoById(id).then(Response=>{
          this.cursos3 = Response.data;
          localStorage.setItem('curso', JSON.stringify(this.cursos3[0]))
          this.valid = true;
          this.buscar =true;
        })
      },
      eliminarCurso() {
        const curso_eliminar = JSON.parse(localStorage.getItem('curso'))
        //console.log(curso_eliminar._id);
        CursoService.eliminarCurso(curso_eliminar._id).then(response => {
          localStorage.removeItem('curso');
          this.snackbar = true;
        })
      }
    }
  }
</script>