<template>
  <v-app>
    <v-banner color="teal">
      <div class="container mx-auto"><h1 class="font-weight-light mx-auto ml-10">¡Bienvenid@! {{ currentUser.nombre }}, ingrese los datos que desea modificar</h1></div>
    </v-banner>

    <v-layout class="pa-10 mx-12">
      <v-flex xs12 sm8 md6 class="mb-8">
        <v-form v-model="valid" @submit.prevent="modificarCurso(currentCurso._id)">
        <v-card min-width="650">
          <v-toolbar flat color="grey darken-4">
            <v-toolbar-title class="font-weight-light white--text ml-10">Actualizar datos del curso</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-text-field
            v-model="curso.nombre"
            :rules="nombreRules"
            :counter="35"
            label="Nombre"
            required>
            </v-text-field>
            <v-layout>
              <v-flex class="mb-4">
                <v-text-field
                v-model="curso.fecha_inicio"
                label="Fecha de inicio"
                required>
                </v-text-field>
              </v-flex>
              <v-flex class="mb-1"></v-flex>
              <v-flex class="mb-4">
                <v-text-field
                v-model="curso.fecha_final"
                label="Fecha final"
                required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex class="mb-4">
                <v-text-field
                v-model="curso.hora"
                :rules="horaRules"
                label="Hora"
                required>
                </v-text-field>
              </v-flex>
              <v-flex class="mb-1"></v-flex>
              <v-flex class="mb-4">
                <v-text-field
                v-model="curso.duracion"
                :rules="duracionRules"
                label="Duracion"
                required>
                </v-text-field>
              </v-flex>
              <v-flex class="mb-1"></v-flex>
              <v-flex class="mb-4">
                <v-text-field
                v-model="curso.precio"
                :rules="precioRules"
                label="Precio"
                :hint="'Pesos'"
                required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex class="mb-4">
                <v-text-field
                v-model="curso.cupoLimite"
                :rules="cupolimiteRules"
                label="Cupo limite"
                required>
                </v-text-field>
              </v-flex>
              <v-flex class="mb-1"></v-flex>
              <v-flex class="mb-4">
                <v-autocomplete
                :items="status"
                item-text="id"
                v-model="curso.status"
                label="Estatus">
                </v-autocomplete>
              </v-flex>
            </v-layout>
            <v-text-field
            v-model="curso.descripcion"
            :rules="descripcionRules"
            label="Descripción"
            required>
            </v-text-field>
            <v-text-field
            v-model="curso.requisitos"
            label="Requisitos"
            required>
            </v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="ma-2">
            <v-btn :disabled="!valid" color="success" class="mr-4" type="submit">Modificar</v-btn>
          </v-card-actions>
          <v-snackbar v-model="snackbar">
            Curso actualizado correctamente
            <v-btn color="blue" text @click="snackbar=false">cerrar</v-btn>
          </v-snackbar>
            <v-snackbar v-model="messageError">
              Error al actualizar el curso
            <v-btn color="blue" text @click="messageError=false">cerrar</v-btn>
          </v-snackbar>
          </v-card>
        </v-form>
      </v-flex>
      <v-flex class="my-12 mx-12">
        <v-card xs12 sm8 md6 class="mb-8" max-width="594" outlined>
          <v-toolbar flat color="grey darken-4">
            <v-toolbar-title class="font-weight-light white--text ml-10">Datos actuales del curso</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="font-weight-light mb-4">Docente {{currentCurso.docente._id}}</v-list-item-title>
              <v-list-item-title class="headline mb-1">Curso {{currentCurso.nombre}}</v-list-item-title>
              <v-list-item-title class="font-weight-light mb-4">ID {{currentCurso._id}}</v-list-item-title>
              <v-list-item-title class="font-weight-light">Fecha inicio {{currentCurso.fecha_inicio}}</v-list-item-title>
              <v-list-item-title class="font-weight-light mb-4">Fecha final {{currentCurso.fecha_final}}</v-list-item-title>
              <v-list-item-title class="font-weight-light">Hora {{currentCurso.hora}}</v-list-item-title>
              <v-list-item-title class="font-weight-light">Duración {{currentCurso.duracion}} horas</v-list-item-title>
              <v-list-item-title class="font-weight-light">Precio ${{currentCurso.precio}}</v-list-item-title>
              <v-list-item-title class="font-weight-light mb-4">Cupo límite {{currentCurso.cupoLimite}}</v-list-item-title>
              <v-list-item-title class="font-weight-light">Descripción {{currentCurso.descripcion}}</v-list-item-title>
              <v-list-item-title class="font-weight-light">Requisitos {{currentCurso.requisitos}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>

import cursosService from '../services/cursos.service';
export default {
    name: 'ModificarCurso',
    data: () => ({
        valid: true,
        snackbar: false,
        messageError: false,
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
        v => (v && v.length <= 35) || 'Name must be less than 35 characters',
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
        precioRules: [
          v => !!v || 'Precio es requerido',
        ],
        curso: { nombre:'',fecha_inicio:'', fecha_final:'', status:'',hora:'', duracion:'',precio:'',cupoLimite:'',descripcion:'',requisitos:''},
  
    }),
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        currentCurso() {
          return JSON.parse(localStorage.getItem('curso'))
        }
    },
    mounted() {
        if(!this.currentUser) {
            this.$router.push('/LogIn');
        }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      modificarCurso(id) {
        cursosService.actualizarCurso(this.curso, id).then(data => {
            localStorage.removeItem('curso');
            //this.$router.push('/MisCursos');
            this.snackbar = true;
        },
        error => {
          this.messageError = true;
        })
      }
    }
}
</script>