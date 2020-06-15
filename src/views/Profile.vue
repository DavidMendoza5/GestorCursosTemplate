<template>
    <v-card>
        <v-card-title>Email: {{currentUser.correo}}</v-card-title>
        <v-card-title>Nombre: {{currentUser.nombre}}</v-card-title>    
        <v-card-title>Id: {{currentUser.id}}</v-card-title>
        <v-card-title v-if="currentUser.rol=='ADMIN_ROLE'">Rol: {{currentUser.rol}}</v-card-title>
        <v-row>
            <v-col>
                <v-btn to="/ModificarInfo" color="success" class="mx-2">Modificar datos</v-btn>        
            </v-col>
        </v-row>
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