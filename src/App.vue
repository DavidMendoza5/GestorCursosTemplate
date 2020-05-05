<template>
  <v-app>
    <v-app-bar dense dark app>
      <v-btn rounded to="/">Inicio</v-btn>
      <v-btn rounded to="/LogIn">Log In</v-btn>
      <v-btn rounded to="/SignUp">Sign Up</v-btn>
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
        <strong class="subheading">¡Contáctanos!</strong>

        <v-spacer></v-spacer>

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
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>HuasTechnologies</strong>
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
-->
