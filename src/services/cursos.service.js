import axios from 'axios';
const url = 'http://localhost:3800/api/';

class CursoService {
    getCursos() {
        return axios.get(url + 'obtenerCursoDisponible')
    }
    getCursoById(id) {
        return axios.get(url + 'obtenerCurso/' + id)

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

    actualizarCurso(curso, id) {
        var config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.put(url + 'actualizarCurso/' + id, {
            nombre: curso.nombre,
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

    eliminarCurso(id) {
        var config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.delete(url + 'eliminarCurso/' + id, config)
    }
}

export default new CursoService();