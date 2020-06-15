import axios from 'axios';
const url = 'http://localhost:3800/api/';

class ComentarioService {
    comentarioEstudiante(comentario) {
        return axios.post(url + 'comentario', {
            descripcion: comentario.descripcion,
            tipo: comentario.tipo,
            calificacion: comentario.calificacion
        })
    }
}

export default new ComentarioService();