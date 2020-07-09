<template>
  <v-layout column align-center class="pa-8">
    <v-flex xs12 sm8 md6>
      
      <v-card
        class="overflow-hidden"
        color="blue-grey"
        dark
        min-width="950">

      <v-toolbar flat color="grey darken-4">
        <v-icon>mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light ml-3">Register a course</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card-text>
        <v-form ref="form" v-model="valid" @submit.prevent="crearCurso">
      
      
        <v-layout>
          <v-flex class="mb-6">
            <v-text-field
            color="white"
            v-model="curso.nombre"
            :rules="nombreRules"
            :counter="25"
            label="Nombre">
            </v-text-field>
          </v-flex>
          <v-flex class="mb-1"></v-flex>
          <v-flex class="mb-6">
            <v-text-field
            color="white"
            v-model="curso.docente"
            :rules="docenteRules"
            label="Docente ID">
            </v-text-field>
          </v-flex>
          <v-flex class="mb-1"></v-flex>
          <v-flex class="mb-6">
            <v-text-field
            color="white"
            v-model="curso.cupoLimite"
            :rules="cupolimiteRules"
            label="Cupo límite">
            </v-text-field>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex class="mb-6">
            <v-text-field
            color="white"
            v-model="curso.fecha_inicio"
            label="Fecha inicio">
            </v-text-field>
          </v-flex>
          <v-flex class="mb-1"></v-flex>
          <v-flex class="mb-6">
            <v-text-field
            color="white"
            v-model="curso.fecha_final"
            label="Fecha final">
            </v-text-field>
          </v-flex>
          <v-flex class="mb-1"></v-flex>
          <v-flex class="mb-6">
            <v-text-field
            color="white"
            v-model="curso.precio"
            label="Precio"
            :hint="'Pesos'">
            </v-text-field>
            </v-autocomplete>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex class="mb-6">
            <v-autocomplete
            :items="status"
            color="white"
            item-text="id"
            v-model="curso.status"
            label="Estatus">
            </v-autocomplete>
          </v-flex>
          <v-flex class="mb-1"></v-flex>
          <v-flex class="mb-6">
            <v-text-field
            color="white"
            v-model="curso.hora"
            :rules="horaRules"
            label="Hora"
            :hint="'Horas'">
            </v-text-field>
          </v-flex>
          <v-flex class="mb-1"></v-flex>
          <v-flex class="mb-6">
            <v-text-field
            color="white"
            v-model="curso.duracion"
            :rules="duracionRules"
            label="Duración"
            :hint="'Horas'">
            </v-text-field>
          </v-flex>
        </v-layout>

        <v-text-field
          color="white"
          v-model="curso.descripcion"
          :rules="descripcionRules"
          label="Descripción">
        </v-text-field>

        <v-text-field
          color="white"
          v-model="curso.requisitos"
          label="Requisitos">
        </v-text-field>
        <v-divider></v-divider>
        <div class="ma-3">
        <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"
            color="teal"
            type="submit">
            GUARDAR
          </v-btn>
          <v-btn
          color="error"
          class="mx-4"
          @click="reset"
          >
            Reset Form
          </v-btn>
        </div>
      </v-form>
      </v-card-text>

    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      absolute
      bottom
      right
      color="dark">
      Se ha añadido un nuevo curso
    </v-snackbar>
      <v-snackbar
      v-model="messageError"
      :timeout="3000"
      absolute
      bottom
      right
      color="dark">
      Error al añadir el curso
    </v-snackbar>
  </v-card>
  
  </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "crearCurso",
    data () {
      return {
        valid: true,
        snackbar: false,
        message:'',
        messageError: false,
        model: null,
        status: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 }
        ],
        nombreRules: [
        v => !!v || 'Nombre es requerido',
        v => (v && v.length <= 25) || 'Name must be less than 25 characters',
        ],
        docenteRules: [
          v => !!v || 'ID Docente es requerido',
        ],
        horaRules: [
          v => !!v || 'Hora es requerida',
        ],
        duracionRules: [
          v => !!v || 'Duración es requerida',
        ],
        cupolimiteRules: [
          v => !!v || 'Cupo limitado es requerido',
        ],
        descripcionRules: [
          v => !!v || 'Descripción es requerida',
        ],
        curso: { nombre:'', docente:'',fecha_inicio:'', fecha_final:'', status:'',hora:'', duracion:'',precio:'',cupoLimite:'',descripcion:'',requisitos:''}
      }
    },
    computed: {
      currentUser(){
        return this.$store.state.auth.user; //Referencia de 'store/auth.module'. Accedes al LocalStorage
      }
    },
    mounted() {
      //Protege las rutas, se necesita estar logueado
      if (!this.currentUser) {
        this.$router.push('/LogIn');
      }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      crearCurso(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user.id == this.curso.docente){
            this.$store.dispatch('auth/crearCurso', this.curso).then(
            data => {
              this.successful = true;
              this.$refs.form.reset();
              this.snackbar = true;
            },
            error => {
              console.log(
                (error.response && error.response.data) ||
                error.message ||
                error.toString()
              )
              this.messageError = true;
              this.snackbar = false;
              this.successful = false;
            })
        } else {
            this.messageError = true;
            this.snackbar = false;
        }
      }
    }
  }
</script>