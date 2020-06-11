import axios from 'axios';
const url = 'http://localhost:3800/api/';

class CursoService {
    getCursos() {
        return axios.get(url + 'obtenerCursoDisponible')
    }

    crearCurso(curso) {
        console.log(localStorage.getItem('token'));
        var config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.post(url + 'crearCurso', {
            nombre: curso.nombre,
            docente: curso.docente,
            fecha_inicio: curso.fecha_inicio,
            fecha_final: curso.fecha_final,
            status: curso.status,
            hora: curso.hora,
            duracion: curso.duracion,
            precio: curso.precio,
            cupoLimite: curso.cupoLimite,
            descripcion: curso.descripcion,
            requisitos: curso.requisitos
        }, config)
    }
}

export default new CursoService();