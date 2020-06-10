import axios from 'axios';
const url = 'http://localhost:3800/api/';

var config = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
    } //Configuración del Header-signup Estudiante

class EstudianteService {
    postEstudiante(estudiante) {
        console.log(estudiante);
        return axios.post(url + 'crearEstudiante', {
                nombre: estudiante.nombre,
                correo: estudiante.correo,
                password: estudiante.password,
                cargo: estudiante.cargo,
                telefono: estudiante.telefono,
                conocimientos_previos: estudiante.conocimientos_previos,
                curso: estudiante.curso
            }, config) //post Estudiante
    }

    login(user) {
        return axios.post(url + 'loginEs', {
            correo: user.correo,
            password: user.password
        }).then(response => {
            if(response.data.token) {
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
}

export default new EstudianteService();