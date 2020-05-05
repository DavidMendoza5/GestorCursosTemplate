import axios from 'axios';
const url = 'http://localhost:3800/api/';

class CursoService {
    getCursos() {
        return axios.get(url+'obtenerCursoDisponible')
    }
} 

export default new CursoService();