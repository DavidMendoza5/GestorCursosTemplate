<template>
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
          prepend-icon="mdi-account-circle"
          label="Username"/>
          <v-text-field 
          prepend-icon="mdi-lock"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-action>
        <v-btn color="info" class="mx-2" to="/SignUp">Register</v-btn>
        <v-btn color="success">Login</v-btn>
      </v-card-action>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    showPassword: false
  }),
}
</script>