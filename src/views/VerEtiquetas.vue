<template> 
  <v-app>   
    <v-col cols="12" sm="6" offset-sm="3">
        <v-form name="form" @submit.prevent="search(id)"> 
          <v-layout>
            <v-flex class="ma-1">
              <v-card width="700" flat> <!--Elimina la elevación-->
                <v-text-field placeholder="Buscar" outlined rounded v-model="id" name="etiqueta_Id"></v-text-field>
              </v-card>
              <v-card width="700" flat>
                <v-text-field v-if="buscar==true" placeholder="Etiqueta" outlined rounded v-model="nombre" name="etiqueta_nombre"></v-text-field>
              </v-card>
            </v-flex>
            <v-flex>
              <v-card-actions>
                <v-btn class="mx-3" color="green" type="submit" large>Buscar etiqueta</v-btn>
                <v-btn class="mx-3" color="red" :disabled="!valid" @click="eliminarEtiqueta(id)" large>Eliminar</v-btn>
              </v-card-actions>
              <v-snackbar v-model="snackbar">
                  Etiqueta no encontrada
                  <v-btn color="blue" text @click="snackbar=false">cerrar</v-btn>
              </v-snackbar>
                <v-snackbar v-model="snackbarEliminacion">
                  Etiqueta eliminada correctamente
                  <v-btn color="blue" text @click="snackbarEliminacion=false">cerrar</v-btn>
              </v-snackbar>
            </v-flex>
          </v-layout>
        </v-form>
    
        <template v-if="buscar===true">
          <v-card class="mx-auto ma-8" max-width="494" outlined>
         <!--Permite obtener los datos del curso-->
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular mb-4">Etiqueta {{etiqueta.etiquetas[0].etiqueta}}</v-list-item-title>
              <v-list-item-title class="headline mb-1">ID {{etiqueta.etiquetas[0]._id}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </v-card>  
        </template>
    </v-col> 
  </v-app>   
</template>


<script>
import etiquetaService from '../services/etiqueta.service'
export default {
    data(){
        return{
            dialog: false,
            valid: false,
            buscar: false,
            etiqueta:[],
            etiqueta2:[],
            id:'',
            nombre:'',
            snackbar: false,
            snackbarEliminacion: false
        }
    },
    methods:{
      search(id){
           etiquetaService.getEtiqueta(id).then(Response=>{
          this.etiqueta = Response.data;
          if(this.etiqueta == undefined) {
            this.snackbar = true;
          }
        //  localStorage.setItem('etiqueta', JSON.stringify(this.cursos3[0]))
          this.valid = true;
          this.buscar =true;
        },
        Error => {
          this.snackbar = true;
        })
      },
      eliminarEtiqueta(id, nombre) {
        etiquetaService.eliminarEtiqueta(id, nombre).then(Response => {
          this.snackbarEliminacion = true;
        },
        Error => {
          console.log('Error al eliminar la etiqueta');
        })
        this.buscar = false;
        this.valid = false;
        this.id = '';
      }
    }
}    
</script>