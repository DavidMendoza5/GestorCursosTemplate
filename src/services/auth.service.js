import axios from 'axios';
const url = 'http://localhost:3800/api/';

class AuthService {
    login(user) {
        return axios.post(url + 'login', {
            correo: user.correo,
            password: user.password
        }).then(response => {
            if(response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        })
    }

    logout() {
        localStorage.removeItem('user');
    }

    //Falta el registro
}
export default new AuthService();