<template>
    <v-app>
        <v-banner>
            <v-layout column align-center class="pa-8">
                <v-form v-model="valid">
                    <v-card width="700" flat> <!--Elimina la elevación-->
                        <v-text-field v-model="idEstudiante" :rules="idRules" :counter="24" placeholder="Buscar" outlined rounded></v-text-field>
                    </v-card>
                    <v-btn class="mx-3" color="red" :disabled="!valid" @click="eliminarEstudiante(idEstudiante)" large>Eliminar</v-btn>
                </v-form>
            </v-layout>
        </v-banner>
    <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
            <div>
            <v-card>
                <v-form name="form" @submit.prevent="search(idDocente)">
                    <h2>Ingrese el id del docente que busca</h2>
                    <v-text-field
                    prepend-icon="mdi-magnify"
                    v-model="idDocente"
                    name="Docente_id"
                    label="Id del docente"
                    />             
                    <v-card>
                        <v-card-actions>
                            <v-btn color="green" type="submit">Buscar docente</v-btn>
                            <v-btn color="red" :disabled="!valid" @click="eliminarDocente()">Eliminar</v-btn>
                        </v-card-actions>              
                    </v-card>
                    <v-snackbar v-model="snackbar">
                        <!--{{ message.message }}--> Docente eliminado correctamente
                        <v-btn color="blue" text @click="snackbar=false">cerrar</v-btn>
                    </v-snackbar>
                </v-form>
            </v-card>
            </div>
        </v-col>
    </v-row>
    <template v-if="buscar===false">
    <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
            <v-card>
                <v-card-title>Docentes</v-card-title>
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
    </template>
    <template v-if="buscar===true">
        <v-col cols="12" sm="6" offset-sm="3">
            <v-card>
                <v-card-title>Docente encontrado</v-card-title>
                <h3> {{ docente[0]._id }} </h3>
                <h3> {{ docente[0].nombre }} </h3>
                <h3> {{ docente[0].correo }} </h3>
                <!--<v-div v-for="">
                </v-div>-->
            </v-card>
        </v-col>
    </template>
    </v-app>
</template>

<script>
import DocenteService from '../services/docentes.service';
export default {
    data() {
        return {
            docentes: [],
            docente:[],
            idDocente: '',
            buscar: false,
            snackbar: false,
            valid: false
        }
    },
    computed: {
        currentUser() {
          return this.$store.state.auth.user;
      }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/LogIn');
        }
        DocenteService.getDocentes().then(Response => {
            console.log(Response.data)
            this.docentes = Response.data;
        })
    },
    methods: {
        search(id){
            DocenteService.getDocentesById(id).then(Response=>{
                this.docente = Response.data;
                localStorage.setItem('docente', JSON.stringify(this.docente[0]))
                //localStorage.setItem('curso', JSON.stringify(this.docente[0]))
                this.valid = true;
                this.buscar =true;
            })
        },
        eliminarDocente() {
            const docente_eliminar = JSON.parse(localStorage.getItem('docente'));
            DocenteService.eliminarDocente(docente_eliminar._id).then(Response => {
                localStorage.removeItem('docente');
                this.snackbar = true;
                this.idDocente = '';
            })
            this.buscar = false;
        }
    }
}
</script>