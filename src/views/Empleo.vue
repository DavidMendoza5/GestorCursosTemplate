<template>

 <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    height="1080" width="1920"
  >
  <v-card width="400" class="mx-auto mt-5">
        <v-img
          height="300"
          width="400" 
          src="../assets/logo.jpg">
    </v-img>
  </v-card>
  <v-card width="800" class="mx-auto mt-5">
    <h1>HuasTecnology</h1>
    <h2>Bolsa de trabajo</h2>
    <p>¡HuasTecnology busca a alguien como tu!</p>
    <p>Unete a nuestro equipo, consulta la bolsa de trabajo y los perfiles que necesitamos</p>
  </v-card>
    <v-card width="800" class="d-inline-block mx-auto mt-5">
        <h2>Se necesita:</h2>
    <v-container>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-img
            height="200"
            width="200"
            src="https://dobleclic.co/wp-content/uploads/2018/11/incognito-man.jpg"
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
            <v-col class="px-0">
              <h1>Desarrollador front</h1>
              <h3>Desarrolador con conocimiento en JavaScript y vuetify.</h3>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-img
            height="200"
            width="200"
            src="https://dobleclic.co/wp-content/uploads/2018/11/incognito-man.jpg"
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
            <v-col class="px-0">
              <h1>Administrador de Base de Datos</h1>
              <h3>Con conocimiento en MongoDB.</h3>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </v-parallax>
</template>