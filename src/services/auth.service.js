import axios from 'axios';
const url = 'http://localhost:3800/api/';
/*let docente = JSON.parse(localStorage.getItem('user'));
var config = {
    headers: {'Authorization': docente.token }
  };*/

class AuthService {
    login(user) {
        return axios.post(url + 'login', {
            correo: user.correo,
            password: user.password
        }).then(response => {
            if (response.data.token) {
                const token = response.data.token
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        })
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }
    register(user) {
        //docente = JSON.parse(localStorage.getItem('user'));
        console.log(localStorage.getItem('token'));
        var config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.post(url + 'crearDocente', {
            nombre: user.nombre,
            correo: user.correo,
            password: user.password,
            cargo: user.cargo
        }, config)
    }
    update(user,id) {
        var config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.put(url+'actualizarDocente/'+id, {
            nombre: user.nombre,
            correo: user.correo,
            cargo: user.cargo
        }, config)
    }
}
export default new AuthService();