<template>
    <v-app>
        <v-banner color="teal">
            <v-row align="center" justify="center">
                <v-col class="text-center">
                    <h1 class="font-weight-light mx-auto">Perfil público</h1>
                </v-col>
            </v-row>
        </v-banner>

        <v-card max-width="644" class="mx-auto ma-10">

            <v-list-item>
                <v-list-item-avatar color="grey"></v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">Añade información sobre tí</v-list-item-title>
                    <v-list-item-subtitle>by HuasTechnology</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="254"></v-img>
            <v-card-text>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-light mb-2">ID {{currentUser.id}}</v-list-item-title>
                        <v-list-item-title class="font-weight-light mb-2">Nombre {{currentUser.nombre}}</v-list-item-title>
                        <v-list-item-title class="font-weight-light mb-2">Email {{currentUser.correo}}</v-list-item-title>
                        <v-list-item-title class="font-weight-light" v-if="currentUser.rol=='ADMIN_ROLE'">Rol {{currentUser.rol}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="teal" to="/ModificarInfo" class="mx-2">Modificar datos</v-btn>
                <v-btn text color="teal" to="/CrearCurso">Crear curso</v-btn>
                <v-btn text color="teal" to="/VerEtiquetas" class="mx-2">Ver etiquetas</v-btn> 
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-app>
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