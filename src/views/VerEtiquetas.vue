<template>    
    <v-col cols="12" sm="6" offset-sm="3">
    <v-card>
        <v-form name="form" @submit.prevent="search(id)"> 
          <v-layout>
            <v-flex class="ma-1">
              <v-card width="700" flat> <!--Elimina la elevación-->
                <v-text-field placeholder="Buscar" outlined rounded v-model="id" name="etiqueta_Id"></v-text-field>
              </v-card>
            </v-flex>
            <v-flex>
              <v-card-actions>
                <v-btn class="mx-3" color="green" type="submit" large>Buscar etiqueta</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-form>
    </v-card>

      <v-card class="mx-auto ma-8" max-width="494" outlined>
         <!--Permite obtener los datos del curso-->
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular mb-4">Etiqueta {{etiqueta.etiquetas[0].etiqueta}}</v-list-item-title>
              <v-list-item-title class="headline mb-1">Id {{etiqueta.etiquetas[0]._id}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        
      </v-card>  

    </v-col>   
</template>


<script>
import EtiquetaService from '../services/etiqueta.service'
import etiquetaService from '../services/etiqueta.service'
export default {
    data(){
        return{
            dialog: false,
            valid: false,
            etiqueta:[],
            etiqueta2:[]
        }
    },
    methods:{
      search(id){
           etiquetaService.getEtiqueta(id).then(Response=>{
          this.etiqueta = Response.data;
          console.log(this.etiqueta.etiquetas[0].etiqueta)
    //  localStorage.setItem('etiqueta', JSON.stringify(this.cursos3[0]))
          this.valid = true;
          this.buscar =true;
        })
      },
    }
}    
</script>