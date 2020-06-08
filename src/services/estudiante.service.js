import axios from 'axios';
const url = 'http://localhost:3800/api/';

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
                //_id: estudiante.id,
                curso: estudiante.curso
            }) //post Estudiante
    }
}

export default new EstudianteService();