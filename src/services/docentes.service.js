import axios from 'axios';
const url = 'http://localhost:3800/api/';

class DocenteService {
    getDocentes() {
        return axios.get(url+'obtenerDocentes')
    }
} 

export default new DocenteService();