import axios from 'axios';
const url = 'http://localhost:3800/api/';

class DocenteService {
    getDocentes() {
        return axios.get(url+'obtenerDocentes')
    }
    getDocentesById(id) {
        return axios.get(url + 'obtenerDocente/' + id)
    }
} 

export default new DocenteService();