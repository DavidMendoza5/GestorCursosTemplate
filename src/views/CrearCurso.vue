<template>
  <v-layout column align-center class="pa-8">
    <v-flex xs12 sm8 md6>
      <v-form 
      v-model="valid"
      @submit.prevent="crearCurso">
      <v-card
        class="overflow-hidden"
        color="blue-grey"
        dark
        min-width="750">

      <v-toolbar flat color="grey darken-4">
        <v-icon>mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light ml-3">Register a course</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card-text>
        <v-text-field
          color="white"
          v-model="curso.nombre"
          :rules="nombreRules"
          :counter="25"
          label="Nombre">
        </v-text-field>

        <v-text-field
          color="white"
          v-model="curso.docente"
          :rules="docenteRules"
          label="Docente ID">
        </v-text-field>

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
          <v-flex class="mb-3"></v-flex>
          <v-flex class="mb-6"></v-flex>
        </v-layout>

        <v-layout>
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

        <v-layout>
          <v-flex class="mb-6">
            <v-text-field
            color="white"
            v-model="curso.precio"
            label="Precio"
            :hint="'Pesos'">
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

      </v-card-text>
    <v-divider></v-divider>

    <v-card-actions class="pa-5">
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!valid"
        color="teal"
        type="submit">
        GUARDAR
      </v-btn>
    </v-card-actions>

    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      absolute
      bottom
      left
      color="dark">
      Se ha añadido un nuevo curso
    </v-snackbar>
  </v-card>
  </v-form>
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

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      crearCurso(){
            this.$store.dispatch('auth/crearCurso', this.curso).then(
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
            })
      }
    }
  }
</script>