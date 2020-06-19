<template>
    <v-app>
        <v-banner color="teal">
            <v-row align="center" justify="center">
                <v-col class="text-center">
                    <h1 class="font-weight-light mx-auto">Perfil público {{ currentUserEst.nombre }}</h1>
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

            <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" height="254"></v-img>
            <v-card-text>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-light mb-2">ID {{currentUserEst.id}}</v-list-item-title>
                        <v-list-item-title class="font-weight-light mb-2">Email {{currentUserEst.correo}}</v-list-item-title>
                        <v-list-item-title class="font-weight-light mb-2">Conocimientos previos {{currentUserEst.conocimientos_previos}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="teal" to="/actualizarEst" class="mx-2">Modificar datos</v-btn> 
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-app>
</template>
<script>
export default {
    name: 'ProfileEst',
    computed: {
        currentUserEst() {
            return this.$store.state.authEs.estudiante;
        }
    },
    mounted() {
        if(!this.currentUserEst) {
            this.$router.push('/LogInEst');
        }
    }
}
</script>