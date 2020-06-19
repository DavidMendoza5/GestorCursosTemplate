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
      <v-spacer></v-spacer>
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
  </v-parallax>
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