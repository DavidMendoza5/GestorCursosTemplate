<template>
    <v-app>
        <v-banner color="teal">
            <v-row align="center" justify="center">
                <v-col class="text-center">
                    <h1 class="font-weight-light mx-auto">{{ currentUser.nombre }}, ingrese el ID del docente a encontrar</h1>
                </v-col>
            </v-row>
        </v-banner>
        <v-banner>
            <v-layout column align-center class="pa-8">
                <v-form name="form" @submit.prevent="search(idDocente)">
                    <v-card width="700" flat> <!--Elimina la elevación-->
                        <v-text-field v-model="idDocente" :counter="24" name="Docente_id" placeholder="Buscar" outlined rounded></v-text-field>
                    </v-card>
                    <v-card-actions>
                        <v-btn color="green" type="submit" large>Buscar docente</v-btn>
                        <v-btn class="mx-3" color="red" :disabled="!valid" @click="eliminarDocente()" large>Eliminar</v-btn>
                    </v-card-actions>
                    <v-snackbar v-model="snackbar">
                        Docente eliminado correctamente
                        <v-btn color="blue" text @click="snackbar=false">cerrar</v-btn>
                    </v-snackbar>
                </v-form>
            </v-layout>
        </v-banner>

        <template v-if="buscar===false">
            <v-card max-width="644" class="mx-auto ma-10">
                <v-toolbar flat color="grey darken-4">
                    <v-toolbar-title class="font-weight-light white--text ml-6">Historial de docentes</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-list-item v-for="(docente, index) in docentes" :key="index" link>
                    <v-list-item-content>
                        <v-list-item-title>Nombre: {{ docente.nombre}}</v-list-item-title>
                        <v-list-item-subtitle>Id: {{ docente._id  }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                    <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-account</v-icon>
                    </v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-card>
        </template>

        <template v-if="buscar===true">
            <v-card max-width="544" class="mx-auto ma-10">
                <v-toolbar flat color="grey darken-4">
                    <v-toolbar-title class="font-weight-light white--text ml-6">Docente encontrado</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="font-weight-light mb-2">ID {{ docente[0]._id }}</v-list-item-title>
                            <v-list-item-title class="font-weight-light mb-2">Nombre {{ docente[0].nombre }}</v-list-item-title>
                            <v-list-item-title class="font-weight-light mb-2">Email {{ docente[0].correo }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-card-text>
            </v-card>
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
                this.idDocente = '';
                this.snackbar = true;
            })
            this.buscar = false;
        }
    }
}
</script>