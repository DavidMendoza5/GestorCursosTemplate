<template>
    <v-form 
        ref="form"
        v-model="valid"
        @submit.prevent="modificarDatos(currentUser.id)">
    <h2>Hola {{ currentUser.nombre }}, ingrese los datos que desea modificar</h2>
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
        Modificar
      </v-btn>
    </div>
    <div class="ma-3">
        <h2>Sus datos actuales</h2>
        <h3>Nombre: {{ currentUser.nombre }}</h3>
        <h3>Correo: {{ currentUser.correo }}</h3>
        <h3>Cargo: {{ currentUser.cargo }}</h3>
    </div>
    </v-container>
        <v-snackbar v-model="snackbar">
      <!--{{ message.message }}--> Docente modificado correctamente
      <v-btn color="blue" text @click="snackbar=false">cerrar</v-btn>
    </v-snackbar>
  </v-form>
</template>

<script>
import docenteService from '../services/auth.service'
export default {
    name: 'ModificarInfo',
    data: () => ({
        valid: true,
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length >= 3 || 'Name must be at least more than 3 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /^.+@huasteco.com+$/.test(v) || 'E-mail must be valid (email@huasteco.com)',
        ],
        docente: { nombre:'', correo:'', password:'', cargo:''},
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