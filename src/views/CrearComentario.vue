<template>
    <v-app>
        <v-layout column align-center class="pa-8">
            <v-flex xs12 sm8 md6>
                <v-form @submit.prevent="comentarioEstudiante">
                    <v-card min-width="500">
                        <v-toolbar flat color="grey darken-4">
                            <v-toolbar-title class="font-weight-light ml-5 white--text">Register a commentary</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-divider></v-divider>
                        <v-textarea
                        solo
                        class="ma-3"
                        name="input-7-4"
                        v-model="comentario.descripcion"
                        label="Comentario">
                        </v-textarea>
                        <v-layout>
                            <v-flex class="mb-6">
                                <v-text-field
                                class="ma-3"
                                v-model="comentario.calificacion"
                                label="Calificación"
                                max="10"
                                min="1"
                                step="1"
                                style="width: 125px"
                                type="number">
                                </v-text-field>
                            </v-flex>
                            <v-flex class="mb-6">
                                <v-autocomplete
                                :items="tipo"
                                item-text="name"
                                class="ma-3"
                                v-model="comentario.tipo"
                                label="Tipo">
                                </v-autocomplete>
                            </v-flex>
                        </v-layout>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-btn
                            class="ma-2 white--text"
                            color="grey darken-4"
                            type="submit">
                            GUARDAR
                            </v-btn>
                        </v-card-actions>
                        <v-snackbar
                        v-model="snackbar"
                        :timeout="2000"
                        absolute
                        bottom
                        right
                        color="dark">
                        Se ha añadido un nuevo comentario
                        </v-snackbar>
                        <v-snackbar
                        v-model="messageError"
                        :timeout="2000"
                        absolute
                        bottom
                        right
                        color="dark">
                        Error al añadir un comentario
                        </v-snackbar>
                    </v-card>
                </v-form>    
            </v-flex>
        </v-layout>        
    </v-app>
</template>

<script>
import ComentarioService from '../services/comentario.service.js' //Con axios
    export default {
        name: "CrearComentario",
        data() {
            return {
                snackbar: false,
                autofocus: true, //No acompleta
                solo: false,
                tipo: [
                    {name: 'Docente'},
                    {name: 'Curso'}
                ],
                comentario: {descripcion:'', tipo:'', calificacion:''},
                messageError: false
            }
        },
        methods: {
            comentarioEstudiante() {
                ComentarioService.comentarioEstudiante(this.comentario).then(
                    data => {
                        this.snackbar = true;
                    },
                    error => {
                        console.log(
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString())
                        this.snackbar = false;
                        this.messageError=true;
                })
                console.log(this.comentario);
            }
        }
    }
</script>