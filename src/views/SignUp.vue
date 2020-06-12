<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    height="1080" width="1920"
  >
    <v-layout column align-center class="pa-8">
    <v-flex xs12 sm8 md6>
      <v-card min-width="550">
        <v-card-title><h1 class="display-1">Register for HuasTech</h1></v-card-title>
        <v-card-text>
        <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="postEstudiante"
  >
    <v-text-field
      prepend-icon="mdi-account-circle"
      v-model="estudiante.nombre"
      :counter="25"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      prepend-icon="mdi-checkbox-marked-circle"
      v-model="estudiante.correo"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      prepend-icon="mdi-lock"
      v-model="estudiante.password"
      :rules="passRules"
      label="Password"
      required
    ></v-text-field>

    <v-text-field
      prepend-icon="mdi-checkbox-marked-circle"
      v-model="estudiante.cargo"
      label="Cargo"
    ></v-text-field>

    <v-text-field
      prepend-icon="mdi-checkbox-marked-circle"
      v-model="estudiante.telefono"
      label="Teléfono"
      :hint="'000-000-0000'"
      required
    ></v-text-field>

    <v-text-field
      prepend-icon="mdi-checkbox-marked-circle"
      v-model="estudiante.conocimientos_previos"
      label="Conocimientos previos"
    ></v-text-field>

    <v-text-field
      prepend-icon="mdi-checkbox-marked-circle"
      v-model="estudiante.curso"
      label="ID_Curso"
    ></v-text-field>
  
    <div class="ma-3">
      <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      type="submit" 
      >
        sign in
      </v-btn>
      <v-btn
      color="error"
      class="mr-4"
      @click="reset"
      >
        Reset Form
      </v-btn>
    </div>
  </v-form>
  </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  </v-parallax>
</template>

<script>
  export default {
    name: "SignUp",
    data: () => ({
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 25) || 'Name must be less than 25 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        //v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passRules: [
        v => !!v || 'Password is required',
      ],
      estudiante: { nombre:'', correo:'', password:'', cargo:'', telefono:'', conocimientos_previos:'',curso:''} //
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      postEstudiante() {
        this.$store.dispatch('authEs/register', this.estudiante).then(
            data => {
              this.successful = true;
            },
            error => {
              console.log(
                (error.response && error.response.data) ||
                error.message ||
                error.toString()
              )
              this.successful = false;
            }
      )}
    }
  }
</script>