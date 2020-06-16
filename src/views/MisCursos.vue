<template>
    <v-parallax
    dark
    src="https://www.bumeran.com.mx/noticias/wp-content/uploads/2016/11/porta1.png"
    height="1000" width="1980">

    <div class="mr-5 mt-5" align="right">
      <v-btn color="error" to="/CrearCurso" dark large>CREAR CURSO</v-btn>
    </div>

    <v-row
      align="center"
      justify="center">

      <v-col class="text-center" cols="12">
        <v-card width="930" class="mx-auto mt-5">
        <h1 class="subheading">Esta es la lista de cursos que posee</h1>
        </v-card>
      </v-col>
    </v-row>
<v-row>
    <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-form name="form" @submit.prevent="search(idCursos)">
            <h2>Ingrese el id del curso que busca</h2>
            <v-text-field
            prepend-icon="mdi-magnify"
            v-model="idCursos"
            name="Curso_Id"
            label="Id del Curso"
            />             
            <v-card>
              <v-card-actions>
                <v-btn color="green" type="submit">Buscar curso</v-btn>
                <v-btn color="blue" :disabled="!valid" to="/ModificarCurso">Actualizar datos</v-btn>
                <v-btn color="red" :disabled="!valid">Eliminar</v-btn>
              </v-card-actions>              
            </v-card>
          </v-form>
        </v-card>

  <v-col cols="12" sm="26">
          <v-card>
            <div v-for="(curso3,index) in cursos3" :key="index">
              <v-icon>mdi-school</v-icon>
              <h3>Id del curso</h3>
              {{curso3._id}}
              <h3>Nombre del curso</h3>
              {{curso3.nombre}}
              <h3>cupo limite</h3>
              {{curso3.cupoLimite}}
           </div>
          </v-card>
  </v-col>

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
        valid: false,
        cursos: [],
        cursos2: [],
        cursos3: [],
        docentes: [],
        idCursos: ''
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
          console.log(Response.data)
          this.cursos3 = Response.data;
          this.valid = true
        })
      }
    }
  }
</script>