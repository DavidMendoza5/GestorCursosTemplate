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
            <v-snackbar v-model="snackbar" :timeout="3000" absolute bottom color="dark">
                ¡Estudiante eliminado con éxito!
            </v-snackbar>
        </v-banner>
    </v-app>
</template>

<script>
import EstudianteService from '../services/estudiante.service.js'
    export default {
        data() {
            return {
                valid: false,
                snackbar: false,
                idEstudiante:'',
                idRules: [
                    v => !!v || 'ID es requerido',
                    v => (v && v.length <= 24) || 'Name must be less than 24 characters'
                ]
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
        },
        methods: {
            eliminarEstudiante(id) {
                EstudianteService.eliminarEstudiante(id)
                this.snackbar = true;
            }    
        }
    }    
</script>