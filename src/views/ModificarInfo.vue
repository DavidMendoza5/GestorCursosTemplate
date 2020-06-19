<template>
  <v-app>
    <v-banner color="teal">
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <h1 class="font-weight-light mx-auto">¡Bienvenid@! {{ currentUser.nombre }}, ingrese los datos que desea modificar</h1>
        </v-col>
      </v-row>
    </v-banner>

    <v-form ref="form" v-model="valid" @submit.prevent="modificarDatos(currentUser.id)">   
      <v-container>
        <v-card max-width="544" class="mx-auto ma-10">
          <v-toolbar flat color="grey darken-4">
            <v-toolbar-title class="font-weight-light white--text ml-6">Datos a actualizar</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-text-field
            v-model="docente.nombre"
            :rules="nameRules"
            :counter="20"
            label="Nombre"
            required>
            </v-text-field>
            <v-text-field
            v-model="docente.correo"
            :rules="emailRules"
            label="E-mail"
            required>
            </v-text-field>
            <v-text-field
            v-model="docente.cargo"
            :rules="nameRules"
            label="Cargo"
            required>
            </v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn :disabled="!valid" color="grey darken-4" class="mr-4 white--text" type="submit">
              Modificar
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card max-width="344" class="mx-auto ma-10">
          <v-toolbar flat color="grey darken-4">
            <v-toolbar-title class="font-weight-light white--text ml-6">Sus datos actuales</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-light mb-2">ID {{currentUser.id}}</v-list-item-title>
                  <v-list-item-title class="font-weight-light mb-2">Nombre {{currentUser.nombre}}</v-list-item-title>
                  <v-list-item-title class="font-weight-light mb-2">Email {{currentUser.correo}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </v-card-text>
        </v-card>
      </v-container>
      <v-snackbar v-model="snackbar">
        Docente modificado correctamente
        <v-btn color="blue" text @click="snackbar=false">cerrar</v-btn>
      </v-snackbar>
    </v-form>
  </v-app>
</template>

<script>
import docenteService from '../services/auth.service'
export default {
    name: 'ModificarInfo',
    data: () => ({
        valid: true,
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length >= 3 || 'Must be at least more than 3 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /^.+@huasteco.com+$/.test(v) || 'E-mail must be valid (email@huasteco.com)',
        ],
        docente: { nombre:'', correo:'', cargo:''},
        snackbar: false,
        //lazy: false
    }),
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if(!this.currentUser) {
            this.$router.push('/LogIn');
        }
    },
    methods: {
      modificarDatos(id) {
        docenteService.update(this.docente, id).then(data => {
            this.snackbar = true;
        })
      }
    }
}
</script>