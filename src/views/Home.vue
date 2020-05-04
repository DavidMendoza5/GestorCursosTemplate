<template>
  <v-parallax height="1080" width="1920" src="../assets/FondoIndex.jpg">
    <h1 class="text-center">Bienvenido</h1>
    <h4 class="subheading" align="center">¡Revisa los cursos que tenemos para ti!</h4>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="200"
              width="200"
              src="../assets/Documento.jpg"
            ></v-img>
          </v-col>
          <v-col
            cols="auto"
            class="text-center pl-0"
          >
        <v-row
              class="flex-column ma-0 fill-height"
              justify="center"
            >
          <v-card-text>
            Cursos
          </v-card-text> 
          <v-col class="px-0">
            <v-btn class="ma-2" outlined color="indigo" to="/VerCursos">Ver cursos</v-btn>
          </v-col>
          </v-row>
          </v-col>
        </v-row>

        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="200"
              width="200"
              src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
            ></v-img>
          </v-col>
          <v-col
            cols="auto"
            class="text-center pl-0"
          >
        <v-row
              class="flex-column ma-0 fill-height"
              justify="center"
            >
          <v-card-text>
            Docentes
          </v-card-text> 
          <v-col class="px-0">
            <v-btn class="ma-2" outlined color="indigo" to="/VerCursos">Ver docentes</v-btn>
          </v-col>
          </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-parallax> 
</template>
