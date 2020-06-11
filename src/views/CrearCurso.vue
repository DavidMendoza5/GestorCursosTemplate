<template>
  <v-layout column align-center class="pa-8">
    <v-flex xs12 sm8 md6>
      <v-form @submit.prevent="crearCurso">
      <v-card
        class="overflow-hidden"
        color="blue-grey"
        dark
        min-width="750">

      <v-toolbar flat color="grey darken-4">
        <v-icon>mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light ml-3">Register a course</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-grey"
          fab
          small
          @click="isEditing = !isEditing">
          <v-icon v-if="isEditing">mdi-close</v-icon>
          <v-icon v-else>mdi-pencil</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text>
        <v-text-field
          :disabled="!isEditing"
          color="white"
          v-model="curso.nombre"
          label="Nombre">
        </v-text-field>

        <v-text-field
          :disabled="!isEditing"
          color="white"
          v-model="curso.docente"
          label="Docente ID">
        </v-text-field>

        <v-layout>
          <v-flex class="mb-6">
            <v-text-field
            :disabled="!isEditing"
            color="white"
            v-model="curso.fecha_inicio"
            label="Fecha inicio">
            </v-text-field>
          </v-flex>
          <v-flex class="mb-1"></v-flex>
          <v-flex class="mb-6">
            <v-text-field
            :disabled="!isEditing"
            color="white"
            v-model="curso.fecha_final"
            label="Fecha final">
            </v-text-field>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex class="mb-6">
            <v-autocomplete
            :disabled="!isEditing"
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
            :disabled="!isEditing"
            color="white"
            v-model="curso.hora"
            label="Hora"
            :hint="'Horas'">
            </v-text-field>
          </v-flex>
          <v-flex class="mb-1"></v-flex>
          <v-flex class="mb-6">
            <v-text-field
            :disabled="!isEditing"
            color="white"
            v-model="curso.duracion"
            label="Duración"
            :hint="'Horas'">
            </v-text-field>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex class="mb-6">
            <v-text-field
            :disabled="!isEditing"
            color="white"
            v-model="curso.precio"
            label="Precio"
            :hint="'Pesos'">
            </v-text-field>
          </v-flex>
          <v-flex class="mb-1"></v-flex>
          <v-flex class="mb-6">
            <v-text-field
            :disabled="!isEditing"
            color="white"
            v-model="curso.cupoLimite"
            label="Cupo límite">
            </v-text-field>
          </v-flex>
        </v-layout>

        <v-text-field
          :disabled="!isEditing"
          color="white"
          v-model="curso.descripcion"
          label="Descripción">
        </v-text-field>

        <v-text-field
          :disabled="!isEditing"
          color="white"
          v-model="curso.requisitos"
          label="Requisitos">
        </v-text-field>

      </v-card-text>
    <v-divider></v-divider>

    <v-card-actions class="pa-5">
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!isEditing"
        color="teal"
        type="submit">
        GUARDAR
      </v-btn>
      <v-btn
        :disabled="!isEditing"
        color="error"
        class="mr-4"
        @click="reset">
        Reset Form
      </v-btn>
    </v-card-actions>

    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      absolute
      bottom
      left
      color="teal">
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
        snackbar: false,
        message:'',
        hasSaved: false,
        isEditing: null,
        model: null,
        status: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 }
        ],
        valid: true,
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 25) || 'Name must be less than 25 characters',
        ],
        docentelRules: [
          v => !!v || 'E-mail is required',
          //v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        temarioRules: [
          v => !!v || 'Password is required',
        ],
        curso: { nombre:'', docente:'',fecha_inicio:'', fecha_final:'', status:'',hora:'', duracion:'',precio:'',cupoLimite:'',descripcion:'',requisitos:''}
      }
    },

    methods: {
      reset () {
        this.$refs.form.reset()
      },
      crearCurso(){
        console.log(this.curso)
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