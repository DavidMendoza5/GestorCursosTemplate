<template>
  <v-container wrap>
    <v-parallax height="1980" width="1280" src="../assets/blanco.jpg">
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

    <v-layout wrap class="mt-5">
      <v-flex md12>
        <h1 class="display-3 text-center teal--text font-weight-bold" align="start" >Bienvenido</h1>
      </v-flex>
      <v-flex md12>
        <h2 class="text-center grey--text" align="start">¡Revisa los cursos que tenemos para ti!</h2>
      </v-flex>
    </v-layout>

    <v-container class="secondary ma-5">
      <h2 class="display-1 text-center teal--text font-weight-bold ma-5">HuasTechnology</h2>
      <v-layout>
        <v-flex md6 class="pl-12">
          <div class="mt-10">
            <h2 class="white--text font-weight-black">Logra tus metas</h2>
          </div>
          <span class="white--text font-regular">¡Actua pronto! e inscribete a los muchos cursos existentes, en la plataforma de HuasTechnology y conoce a tus docentes.</span>
        </v-flex>
        <v-flex md6>
          <div class="mt-5">
            <v-img height="140" width="135" class="mx-auto" src="https://image.flaticon.com/icons/png/512/2076/2076420.png"></v-img>     
          </div>
        </v-flex>
      </v-layout>
      <v-layout class="ma-5">
        <v-flex md6>
          <div class="mt-5">
            <v-img height="150" width="135" class="mx-auto" src="https://www.vippng.com/png/full/293-2936122_la-innovacin-no-tenemos-miedo-a-probar-y.png"></v-img>     
          </div>
        </v-flex>
        <v-flex md6>
          <div class="mt-5">
            <h2 class="white--text font-weight-black mt-12">Forma tus futuro</h2>
          </div>
          <span class="white--text font-regular">Descubre los cursos disponibles en HuasTechnology y marca la diferencia.</span>
        </v-flex>
      </v-layout>
    </v-container>
    
    <v-container>
    <v-layout mt-5>
      <v-flex md10>
        <h3 class="headline text-left blue-grey--text">¿Preparado para conocer nuestros cursos?</h3>
      </v-flex>
    </v-layout>
    <v-spacer></v-spacer>
    <v-layout class="mt-5">
      <v-flex md5>
        <v-card>
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-img
                  height="200"
                  width="200"
                  src="https://cdn.ticbeat.com/src/uploads/2019/12/mooc-diciembre.jpg">
                </v-img>
              </v-col>
              <v-col cols="auto" class="text-center">
                <v-row class="flex-column ma-2 fill-height" justify="center">
                  <v-card-text class="display-1 font-weight-bold">Cursos</v-card-text>
                  <v-col class="px-0"> <!--'outlined', Bordea el botón-->
                    <v-btn class="ma-2" rounded color="primary" dark to="/VerCursos">VER CURSOS</v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card> 
      </v-flex>
    </v-layout> 
    <br>
    <v-layout class="mt-5">
      <v-card class="d-flex pa-2" outlined tile>
        <div class="headline text--secondary">
          Porque Tú formación academica nos importa. Visita HuasTechnology e inscribete a los mejores cursos.
        </div>
      </v-card>  
    </v-layout>

    <v-layout class="mt-5">
      <v-flex>
        <h3 class="headline text-left blue-grey--text">Conocer a nuestros docentes</h3>
      </v-flex>
    </v-layout>

    <v-layout class="mt-5">
      <v-flex md5>
        <v-card>
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-img
                  height="200"
                  width="200"
                  src="https://www.icdlcolombia.org/wp-content/uploads/2018/11/seo-data-big-data-analytics-site-database-1443941-pxhere.com_.jpg">
                </v-img>
              </v-col>
              <v-col cols="auto" class="text-center">
                <v-row class="flex-column ma-1 fill-height" justify="center">
                  <v-card-text class="display-1 font-weight-bold">Docentes</v-card-text>
                  <v-col class="px-0">
                    <v-btn class="ma-2" rounded color="primary" dark to="/VerDocentes">VER DOCENTES</v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card> 
      </v-flex>
    </v-layout>      
    </v-container>
    <v-spacer></v-spacer>
    </v-parallax>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://micarrerauniversitaria.com/wp-content/uploads/2018/01/construction.jpg',
          },
          {
            src: 'https://www.oei.es/historico/divulgacioncientifica/IMG/arton5440.jpg?1560240575',
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

