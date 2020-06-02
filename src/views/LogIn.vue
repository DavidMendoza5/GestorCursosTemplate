<template>
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form name="form" @submit.prevent="handleLogin">
          <v-text-field 
          prepend-icon="mdi-account-circle"
          v-model="user.correo"
          name="correo"
          label="Email"/>
          <v-text-field 
          prepend-icon="mdi-lock"
          v-model="user.password"
          name="password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="info" class="mx-2" to="/SignUp">Register</v-btn>
            <v-btn color="success" type="submit">Login</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
    <v-snackbar v-model="snackbar" :class="successful ? 'alert-success' : 'alert-danger'">
      <!--{{ message.message }}--> Las credenciales no coinciden
      <v-btn color="blue" text @click="snackbar=false">cerrar</v-btn>
    </v-snackbar>

  </v-app>
</template>

<script>
//import User from '../models/user';
export default {
  name:'LogIn',
  data: () => ({
    //user: new User('', ''),
    user: {correo: "", password: ""},
    showPassword: false,
        snackbar: false,
        message:''
  }),
  computed:{
    loggedIn(){
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created(){
    if(this.loggedIn){
      this.$router.push('/Profile');
    }
  },
  methods:{
    handleLogin(){
      console.log('has hecho click')
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          this.snackbar = true;
          return;
        }
        if(!this.user.correo || !this.user.password) {
          this.snackbar = true;
          this.message = 'error';
        }
        if(this.user.correo && this.user.password){
          this.$store.dispatch('auth/login', this.user).then(
              () => {
                this.$router.push('/Profile');
              },
              error => {
                this.snackbar = true;
                this.message = 
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              }
          );
        }
      });
    }
  }
}
</script>