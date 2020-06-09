import registroEstudiante from '../services/estudiante.service'

const estudiante = JSON.parse(localStorage.getItem('estudiante'));
const secondState = estudiante ? { status: { loggedIn: true }, estudiante } : { status: { loggedIn: false }, estudiante: null };

export const authEs = {
    namespaced: true,
    state: secondState,
    actions: {

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
        registerSuccess(state) {
            state.status.loggedIn = false; //Registra pero no loggea
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
}