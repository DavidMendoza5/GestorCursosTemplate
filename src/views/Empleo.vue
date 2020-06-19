<template>
 <v-app>
  <v-banner color="teal">
    <v-layout>
    <v-flex class="mb-4">
      <v-card width="400" class="mx-auto mt-5">
        <v-img height="300" width="400" src="../assets/logo.jpg"></v-img>
      </v-card>
    </v-flex>

    <v-flex class="mx-10 ">
      <v-card width="980" class="mx-auto mt-5" flat color="teal">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline"><h1>HuasTecnology</h1></v-list-item-title>
            <v-list-item-title class="headline mb-4"><h3>Bolsa de trabajo</h3></v-list-item-title>
            <v-list-item-title class="headline">¡HuasTecnology busca a alguien como tu!</v-list-item-title>
            <v-list-item-title class="headline mb-4">Unete a nuestro equipo, consulta la bolsa de trabajo y los perfiles que necesitamos</v-list-item-title>
            <v-list-item-subtitle>by HuasTechnology</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-flex>
    </v-layout>
  </v-banner>
          
    <v-card width="800" class="d-inline-block mx-auto mt-5" flat>
        <h2 class="mb-8">Echa un vistazo a los puestos disponibles</h2>
    <v-container>
      <v-layout>
      <v-flex class="mb-6">
      <v-card max-width="344" class="mx-auto" flat>
        <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">Desarrollador front</v-list-item-title>
            <v-list-item-subtitle>by HuasTechnology</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-img src="https://dobleclic.co/wp-content/uploads/2018/11/incognito-man.jpg" height="200" width="200"></v-img>
        <v-card-text>
          Desarrolador con conocimiento en JavaScript y vuetify.
        </v-card-text>
      </v-card>
      </v-flex>

      <v-flex class="mb-6">
      <v-card max-width="344" class="mx-auto" flat>
        <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">Administrador de</v-list-item-title>
            <v-list-item-title class="headline">Base de Datos</v-list-item-title>
            <v-list-item-subtitle>by HuasTechnology</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-img src="https://dobleclic.co/wp-content/uploads/2018/11/incognito-man.jpg" height="200" width="200"></v-img>
        <v-card-text>
          Con conocimiento en MongoDB.
        </v-card-text>
      </v-card>
      </v-flex>
    </v-layout>
    </v-container>
    </v-card>
  </v-app>
</template>