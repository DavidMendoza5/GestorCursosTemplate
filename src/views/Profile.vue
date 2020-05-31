<template>
    <v-card>
        <v-card-title>Email: {{currentUser.correo}}</v-card-title>
        <v-card-title>Nombre: {{currentUser.nombre}}</v-card-title>    
        <v-card-title>Id: {{currentUser.id}}</v-card-title>      
    </v-card>
</template>

<script>
export default {
    name: 'Profile',
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if(!this.currentUser) {
            this.$router.push('/LogIn');
        }
    }
}
</script>