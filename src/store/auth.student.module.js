import registroEstudiante from '../services/estudiante.service'

const estudiante = JSON.parse(localStorage.getItem('estudiante'));
const secondState = estudiante ? { status: { loggedIn: true }, estudiante } : { status: { loggedIn: false }, estudiante: null };

export const authEs = {
    namespaced: true,
    state: secondState,
    actions: {
        login({ commit }, estudiante) {
            return registroEstudiante.login(estudiante).then(
                estudiante => {
                    commit('loginSuccess', estudiante);
                    return Promise.resolve(estudiante);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error); 
                }
            );
        },
        logout({ commit }) {
            registroEstudiante.logout();
            commit('logout');
        },
        register({ commit }, estudiante) {
            return registroEstudiante.postEstudiante(estudiante).then(
                estudiante => {
                    console.log(estudiante);
                    commit('registerSuccess', estudiante);
                    return Promise.resolve(estudiante);
                },
                error => {
                    commit('registerFailure');
                    return Promise.reject(error);
                }
            ).catch(error => {
                console.log(error);
            })
        }
        //Faltan los registros
    },
    mutations: {
        loginSuccess(state, estudiante) {
            state.status.loggedIn = true;
            state.estudiante = estudiante;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.estudiante = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.estudiante = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false; //Registra pero no loggea
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
}