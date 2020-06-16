<template>
<v-app>
  <v-layout column align-center class="pa-8">
    <v-flex xs12 sm8 md6>
    <v-hover>
      <template v-slot="{ hover }">
        <v-card
          :elevation="hover ? 24 : 6"
          min-width="750"
          class="font-weight-light mx-auto text-center pa-6">
          Hola {{currentUser.nombre}}, ingrese los datos que desea modificar
        </v-card>
      </template>
    </v-hover>
    </v-flex>
    <v-flex xs12 sm8 md6 class="pa-8">
    <v-form v-model="valid" @submit.prevent="actualizarEstudiante(currentUser.id)">
      <v-card min-width="750">
        <v-card-text>
          <v-layout>
            <v-flex class="pa-3">
              <v-text-field
              v-model="estudiante.nombre"
              :rules="nameRules"
              label="Nombre"
              class="font-weight-light">
              </v-text-field>
            </v-flex>
            <v-flex class="pa-3">
              <v-text-field
              class="font-weight-light"
              v-model="estudiante.correo"
              :rules="emailRules"
              label="E-mail">
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex class="pa-3">
              <v-text-field
              class="font-weight-light"
              :hint="'000-000-0000'"
              v-model="estudiante.telefono"
              label="Teléfono">
              </v-text-field>
            </v-flex>
            <v-flex class="pa-3">
              <v-text-field
              class="font-weight-light"
              v-model="estudiante.cargo"
              label="Cargo">
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-flex class="pa-3">
            <v-text-field
              class="font-weight-light"
              v-model="estudiante.conocimientos_previos"
              label="Conocimientos previos">
            </v-text-field>
          </v-flex>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn :disabled="!valid" class="ma-2 white--text" color="grey darken-4" type="submit">Actualizar</v-btn>
        </v-card-actions>
        <v-snackbar
          v-model="snackbar"
          :timeout="3000"
          absolute
          bottom
          right
          color="dark">
          Se ha actualizado su perfil
        </v-snackbar>
      </v-card>
      </v-form>
    </v-flex>
    <v-flex xs12 sm8 md6 class="pa-8">
      <v-card min-width="750">
        <v-toolbar flat color="grey darken-4">
          <v-toolbar-title class="font-weight-light ml-5 white--text">Sus datos actuales</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Nombre: {{currentUser.nombre}}</v-list-item-title>
              <v-list-item-title>E-mail: {{currentUser.correo}}</v-list-item-title>
              <v-list-item-title>Teléfono: {{currentUser.telefono}}</v-list-item-title>
              <v-list-item-title>Cargo: {{currentUser.cargo}}</v-list-item-title>
              <v-list-item-title>Conocimientos previos: {{currentUser.conocimientos_previos}}</v-list-item-title>
              <v-list-item-title>Curso ID: {{currentUser.curso}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-app>  
</template>

<script>
import EstudianteService from '../services/estudiante.service.js'
  export default {
    name: 'ActualizarEst',
    data() {
      return {
        valid: true,
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 25) || 'Name must be less than 25 characters',
        ],
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        snackbar: false,
        estudiante: { nombre:'', correo:'', cargo:'', telefono:'', conocimientos_previos:'',curso:''} 
      }
    },
    computed: {
      currentUser(){
        return this.$store.state.authEs.estudiante; //Referencia de 'store/auth.student.module'. Accedes al LocalStorage
      } 
    },
    mounted() {
      //Protege las rutas, se necesita estar logueado
      if (!this.currentUser) {
        this.$router.push('/LogInEst');
      }
    },
    methods: {
      actualizarEstudiante(id) {
        console.log(this.estudiante);
        EstudianteService.actualizarEstudiante(this.estudiante, id).then(data => {
          this.snackbar = true;
        })
      }
    }
  }
</script>