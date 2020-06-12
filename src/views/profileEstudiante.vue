<template>
    <div>
        <h1>Hola {{ currentUserEst.nombre }}</h1>
        <h2>Correo: {{currentUserEst.correo}}</h2>
        <h2>Id: {{currentUserEst.id}}</h2>
    </div>
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