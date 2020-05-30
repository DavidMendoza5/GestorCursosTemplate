import axios from 'axios';
import authHeader from './auth-header.service';

const url = 'http://localhost:3800/api/';

class UserService {
    getPublicContent() {
        return axios.get(url + 'all');
    }
}