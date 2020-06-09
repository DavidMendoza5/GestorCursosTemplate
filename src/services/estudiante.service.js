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
}

export default new EstudianteService();