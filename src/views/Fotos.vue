<template>
     <v-app>

     <v-banner color="teal">
    <v-layout>
    <v-flex class="mb-4">
      <v-card width="400" class="mx-auto mt-5" color="teal" flat>
        <v-img class="mx-10" height="100" width="150" src="../assets/logo.jpg"></v-img>
      </v-card>
    </v-flex>

    <v-flex class="mx-10 ">
      <v-card width="980" class="mx-auto mt-5" flat color="teal">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline"><h1>HuasTecnology</h1></v-list-item-title>
            <v-list-item-title class="headline mb-4"><h3>Nuestras fotos</h3></v-list-item-title>
            <v-list-item-subtitle>by HuasTechnology</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-flex>
    </v-layout>
  </v-banner>
     <!--
       <v-card width="400" class="mx-auto mt-5">
        <v-img
          height="300"
          width="400" 
          src="../assets/logo.jpg">
    </v-img>
  </v-card>
      <v-spacer></v-spacer>
     -->
    <v-container>
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src">
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-spacer></v-spacer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://abc-englishlevels.com/wp-content/uploads/2018/01/aprendiendo-idioma-634x317.jpg',
          },
          {
            src: 'https://lh3.googleusercontent.com/proxy/eX0Ldt8QXBF-jYmawblUjiEMK_XNBJCZUecC1JdAOVHhfJAZz62h7qrG5xKo11dDiVOy_aIMbr4vlwiWpwRZLcpKlvoDLafCklHE2ajZFOQkrNHJ8osT3wby6Zkzv90',
          },
          {
            src: 'https://www.uide.edu.ec/wp-content/uploads/2019/09/adm_empresas-1152x600.jpg',
          },
          {
            src: 'https://www.utel.edu.mx/blog/wp-content/uploads/2013/07/Dibujo.bmp',
          },
        ],
      }
    },
  }
</script>