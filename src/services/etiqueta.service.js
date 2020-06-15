import axios from 'axios';
const url = 'http://localhost:3800/api/';

class EtiquetaService {
    crearEtiqueta(etiqueta) {
        var config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.post(url + 'crearEtiqueta', {
            etiqueta: etiqueta.etiqueta,
            referenciaId: etiqueta.referenciaId,
        }, config)
    }
}

export default new EtiquetaService();