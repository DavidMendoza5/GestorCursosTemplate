
<template>
  <v-app>

    <v-form ref="form" v-model="valid" :lazy-validation="lazy" @submit.prevent="crearDocente">   
      <v-container>
        <v-card max-width="544" class="mx-auto ma-10">
          <v-toolbar flat color="grey darken-4">
            <v-toolbar-title class="font-weight-light white--text ml-6">Nuevo docente</v-toolbar-title>
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
            v-model="docente.password"
            :rules="nameRules"
            :counter="10"
            label="Contraseña"
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
              Registrar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
      <v-snackbar v-model="snackbar">
        Docente creado correctamente
        <v-btn color="blue" text @click="snackbar=false">cerrar</v-btn>
      </v-snackbar>
      <v-snackbar v-model="errorMessage">
        Error al crear docente
        <v-btn color="blue" text @click="errorMessage=false">cerrar</v-btn>
      </v-snackbar>
    </v-form>
  </v-app>
</template>

  <script>
  export default {
    name:"Register",
    data: () => ({
        valid: false,
        errorMessage: false,
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length >= 3 || 'Name must be at least more than 3 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /^.+@huasteco.com+$/.test(v) || 'E-mail must be valid',
        ],
        docente: { nombre:'', correo:'', password:'', cargo:''},
        snackbar: false,
        lazy: false
    }),
    methods: {
        crearDocente() {
            console.log(this.docente)
            this.$store.dispatch('auth/register', this.docente).then(
            data => {
              this.snackbar = true;
            },
            error => {
              console.log(
                (error.response && error.response.data) ||
                error.message ||
                error.toString())
                this.snackbar = false;
                this.errorMessage = true;
            })
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if(!this.currentUser) {
            this.$router.push('/LogIn');
        }
    }
}
</script>