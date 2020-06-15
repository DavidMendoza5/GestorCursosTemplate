import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/LogIn',
        name: 'LogIn',
        component: () =>
            import ('../views/LogIn.vue')
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: () =>
            import ('../views/SignUp.vue')
    },
    {
        path: '/VerCursos',
        name: 'VerCursos',
        component: () =>
            import ('../views/VerCursos.vue')
    },
    {
        path: '/VerDocentes',
        name: 'VerDocentes',
        component: () =>
            import ('../views/VerDocentes.vue')
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: () =>
            import ('../views/Profile.vue')
    },
    {
        path: '/crearCurso',
        name: 'CrearCurso',
        component: () =>
            import ('../views/CrearCurso.vue')
    },
    {
        path: '/CrearDocente',
        name: 'CrearDocente',
        component: () =>
            import ('../views/CrearDocente.vue')
    },
    {
        path: '/LogInEst',
        name: 'LogInEst',
        component: () =>
            import ('../views/LogInEst.vue')
    },
    {
        path: '/MisCursos',
        name: 'MisCursos',
        component: () =>
            import ('../views/MisCursos.vue')
    },
    {
        path: '/crearEtiqueta',
        name: 'CrearEtiqueta',
        component: () =>
            import ('../views/CrearEtiqueta.vue')
    },
    {
        path: '/ModificarInfo',
        name: 'ModificarInfo',
        component: () =>
            import ('../views/ModificarInfo.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router