<template>
<v-app>
    <v-layout column align-center class="pa-8">
        <v-flex xs12 sm8 md6>
            <v-form v-model="valid" @submit.prevent="crearEtiqueta"> 
                <v-card class="overflow-hidden ma-5" min-width="500">
                    <v-toolbar flat color="grey darken-4">
                        <v-toolbar-title class="font-weight-light ml-5 white--text">Register a tag</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-text-field
                    :rules="etiquetaRules"
                    v-model="etiqueta.etiqueta"
                    :counter="20"
                    filled
                    color="blue-grey lighten-2"
                    label="Etiqueta"
                    class="ma-5">
                    </v-text-field>
          
                    <v-text-field
                    v-model="etiqueta.referenciaId"
                    filled
                    color="blue-grey lighten-2"
                    label="Nombre ID"
                    class="ma-5">
                    </v-text-field>

                    <v-divider></v-divider>
                    <div class="ma-2" align="right">
                        <v-btn
                        :disabled="!valid"
                        color="grey darken-4"
                        type="submit"
                        class="white--text ma-2">
                        GUARDAR
                        </v-btn>   
                    </div>
                    <v-snackbar v-model="snackbar">
                        {{message}}
                        <v-btn color="blue" text @click="snackbar=false">cerrar</v-btn>
                    </v-snackbar>
                </v-card>
            </v-form>
        </v-flex>
    </v-layout>
</v-app>    
</template>

<script>
    export default {
        name: "CrearEtiqueta",
        data () {
            return {
                valid: true,
                snackbar: false,
                message:'',
                etiquetaRules:[
                    v => !!v || 'Etiqueta es requerida',
                    v => (v && v.length <= 25) || 'Etiqueta must be less than 25 characters',
                ],
                etiqueta: {etiqueta:'',referenciaId:''}
            }
        },
        methods: {
            validate(){
                this.$refs.form.validate()
            },
            crearEtiqueta() {
                this.$store.dispatch('auth/crearEtiqueta', this.etiqueta).then(
                data => {
                    if (data != null){
                        this.message = data.data.message;
                        this.snackbar = true;
                    }
                },
                error => {
                    console.log(
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString())
                })
            }
        }
    }
</script>