import axios from 'axios';
const url = 'http://localhost:3800/api/';

class DocenteService {
    getDocentes() {
        return axios.get(url+'obtenerDocentes')
    }
    
    getDocentesById(id) {
        return axios.get(url + 'obtenerDocente/' + id)
    }

    eliminarDocente(id) {
        var config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.delete(url + 'eliminarDocente/' + id, config)
    }
} 

export default new DocenteService();