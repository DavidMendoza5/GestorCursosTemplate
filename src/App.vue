<template>
  <v-app>
    <v-app-bar dense dark app>
      <v-btn rounded to="/">Inicio</v-btn>
      <v-btn rounded href="http://localhost:3800/" target="_blank">Chat</v-btn>
      <v-btn rounded to="/LogIn" v-if="!currentUser && !currentUserEst">Login maestros</v-btn>
      <v-btn rounded to="/LogInEst" v-if="!currentUser && !currentUserEst">Login estudiantes</v-btn>
      <v-btn rounded to="/SignUp" v-if="!currentUser && !currentUserEst">Sign Up</v-btn>
      <v-btn rounded to="/MisCursos" v-if="currentUser">Mis cursos</v-btn>
      <v-btn rounded to="/Profile" v-if="currentUser">Perfil</v-btn>
      <v-btn rounded to="/ProfileEst" v-if="currentUserEst">Perfil</v-btn>
      <v-btn rounded to="/CrearDocente" v-if="currentUser && currentUser.rol == 'ADMIN_ROLE'">Crear docente</v-btn>
      <v-btn rounded to="/Docentes" v-if="currentUser && currentUser.rol == 'ADMIN_ROLE'">Docentes</v-btn>
      <v-btn rounded to="/Estudiante" v-if="currentUser">Estudiantes</v-btn>
      <v-btn rounded v-if="currentUser" @click.prevent="logOut">Cerrar sesión</v-btn>
      <v-btn rounded v-if="currentUserEst" @click.prevent="logOutEst">Cerrar sesión</v-btn>
       <v-spacer></v-spacer>
        <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <v-layout>
          <v-flex md-3>
            <v-container>
              <h4>Sobre nosotros</h4>
              <a href="#" class="secondary--text font-weight-light">¡Contáctanos!</a>
            </v-container>
          </v-flex>
          <v-flex md-3>
            <v-container>
              <v-btn text href="#" to="/About" class="secondary--text font-weight-light">¿Quiénes somos?</v-btn>
              <v-flex>
                <a href="#" class="secondary--text font-weight-light">Empleo</a>
              </v-flex>
            </v-container>
          </v-flex>
          <v-flex md-3>
            <v-container>
              <v-btn text href="#" to="/GoogleMapLoader" class="secondary--text font-weight-light">Mapa del sitio</v-btn>
              <v-flex>
                <a href="#" class="secondary--text font-weight-light">Cursos destacados</a>
              </v-flex>
            </v-container>
          </v-flex>
          <v-flex md-3>
            <v-container>
              <a href="#" class="secondary--text font-weight-light">Politicas de Privacidad</a>
            </v-container>
          </v-flex>
        </v-layout>
      
        <v-spacer></v-spacer>
        <v-layout>
          <v-flex md-3>
            <h4>Aprende en nuestras redes:</h4>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              dark
              icon
              href="https://www.facebook.com/angeljesus.canpech"
            >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>          
          </v-flex>
        </v-layout>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center font-weight-light">
        {{ new Date().getFullYear() }} — <strong class="body-1 font-weight-light">Todos los Derechos Reservados HuasTechnology®, Inc.</strong>
      </v-card-text>
    </v-card>
  </v-footer>

  </v-app>
</template>


<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook'
      ],
    }),
    computed:{
      currentUser() {
      return this.$store.state.auth.user;
      },
      currentUserEst() {
      return this.$store.state.authEs.estudiante;
      }
    },
    methods:{
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/LogIn');
      },
        logOutEst() {
        this.$store.dispatch('authEs/logout');
        this.$router.push('/LogInEst');
      }
    }
  }
</script>

<!--
<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Log in', icon: 'dashboard' },
          { title: 'Sign up', icon: 'question_answer' },
        ],
      }
    },
  }
</script>
--!>
