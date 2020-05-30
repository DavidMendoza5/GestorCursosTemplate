<template>
    <v-card>
        <v-card-title>Email: {currentUser.correo}</v-card-title>      
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