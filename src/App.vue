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
  </v-app>
</template>

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
