import AuthService from '../services/auth.service';
import CursoService from '../services/cursos.service';
import EtiquetaService from '../services/etiqueta.service';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { status: { loggedIn: true }, user } : { status: { loggedIn: false }, user: null };

export const auth = {
    namespaced: true,
    state: initialState,
    //token: user.token || '',
    actions: {
        login({ commit }, user) {
            return AuthService.login(user).then(
                user => {
                    commit('loginSuccess', user);
                    return Promise.resolve(user);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            );
        },
        logout({ commit }) {
            AuthService.logout();
            commit('logout');
        },
        register({ commit }, user) {
            return AuthService.register(user).then(
                user => {
                    console.log(user)
                    commit('registerSuccess', user);
                    return Promise.resolve(user);
                },
                error => {
                    commit('registerFailure');
                    return Promise.reject(error);
                }
            ).catch(error => {
                console.log(error);
            })
        },
        //'vuex' post de crearCurso
        crearCurso({ commit }, curso) {
            return CursoService.crearCurso(curso).then(
                curso => {
                    console.log(curso)
                    commit('cursoSuccess', curso);
                    return Promise.resolve(curso);
                },
                error => {
                    commit('cursoFailure');
                    return Promise.reject(error);
                }
            ).catch(error => {
                console.log(error);
            })
        },
        //'vuex' post crearEtiqueta
        crearEtiqueta({ commit }, etiqueta) {
            return EtiquetaService.crearEtiqueta(etiqueta).then(
                etiqueta => {
                    console.log(etiqueta)
                    commit('etiquetaSuccess', etiqueta);
                    return Promise.resolve(etiqueta);
                },
                error => {
                    commit('etiquetaFailure');
                    return Promise.reject(error);
                }
            ).catch(error => {
                console.log(error);
            })
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        },
        cursoSuccess(state) {
            state.status.loggedIn = true; //Indica estar autenticado
        },
        cursoFailure(state) {
            state.status.loggedIn = true;
        },
        etiquetaSuccess(state) {
            state.status.loggedIn = true; //Indica estar autenticado
        },
        etiquetaFailure(state) {
            state.status.loggedIn = true;
        }
    }
}