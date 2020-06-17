<template>
    <v-form 
        ref="form"
        v-model="valid"
        @submit.prevent="modificarCurso(currentCurso._id)">
    <h2>Hola {{ currentUser.nombre }}, ingrese los datos que desea modificar</h2>
    <v-container>
    <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="curso.nombre"
            :rules="nombreRules"
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
            v-model="curso.fecha_inicio"
            label="Fecha de inicio"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="curso.fecha_final"
            label="Fecha final"
            required
          ></v-text-field>
        </v-col>
                <v-col
          cols="12"
          md="4"
        >

          <v-text-field
            v-model="curso.hora"
            :rules="horaRules"
            label="Hora"
            required
          ></v-text-field>
        </v-col>
                <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="curso.duracion"
            :rules="duracionRules"
            label="Duracion"
            required
          ></v-text-field>
        </v-col>
                <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="curso.precio"
            :rules="precioRules"
            label="Precio"
            :hint="'Pesos'"
            required
          ></v-text-field>
        </v-col>
                <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="curso.cupoLimite"
            :rules="cupolimiteRules"
            label="Cupo limite"
            required
          ></v-text-field>
        </v-col>
                <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="curso.descripcion"
            :rules="descripcionRules"
            label="Descripción"
            required
          ></v-text-field>
        </v-col>
                <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="curso.requisitos"
            label="Requisitos"
            required
          ></v-text-field>
        </v-col>

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

      </v-row>
    <div class="ma-3">
      <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      type="submit">
        Modificar
      </v-btn>
    </div>
    <div class="ma-3">
        <h2>Sus datos actuales</h2>
        <h3>Nombre: {{ currentCurso.nombre }}</h3>
        <h3>Correo: {{ currentCurso.descripcion }}</h3>
        <h3>ID: {{ currentCurso._id }}</h3>
    </div>
    </v-container>
        <v-snackbar v-model="snackbar">
      <!--{{ message.message }}--> Docente modificado correctamente
      <v-btn color="blue" text @click="snackbar=false">cerrar</v-btn>
    </v-snackbar>
  </v-form>
</template>

<script>

import cursosService from '../services/cursos.service';
export default {
    name: 'ModificarCurso',
    data: () => ({
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
      modificarCurso(id) {
        cursosService.actualizarCurso(this.curso, id).then(data => {
            this.snackbar = true;
            localStorage.removeItem('curso');
            this.$router.push('/MisCursos');
        })
      }
    }
}
</script>