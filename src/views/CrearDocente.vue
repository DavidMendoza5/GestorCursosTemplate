
<template>
  <v-form 
        ref="form"
        v-model="valid"
        :lazy-validation="lazy"
        @submit.prevent="crearDocente">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="docente.nombre"
            :rules="nameRules"
            :counter="20"
            label="Nombre"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="docente.password"
            :rules="nameRules"
            :counter="10"
            label="Contraseña"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="docente.correo"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="docente.cargo"
            :rules="nameRules"
            label="Cargo"
            required
          ></v-text-field>
        </v-col>
      </v-row>
          <div class="ma-3">
      <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      type="submit"
      >
        Registrar
      </v-btn>
    </div>
    </v-container>
        <v-snackbar v-model="snackbar">
      <!--{{ message.message }}--> Docente creado correctamente
      <v-btn color="blue" text @click="snackbar=false">cerrar</v-btn>
    </v-snackbar>
  </v-form>
</template>

  <script>
  export default {
    name:"Register",
    data: () => ({
        valid: false,
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
              this.successful = true;
              this.snackbar = true;
            },
            error => {
              console.log(
                (error.response && error.response.data) ||
                error.message ||
                error.toString()
              )
              this.successful = false;
            }
            )
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