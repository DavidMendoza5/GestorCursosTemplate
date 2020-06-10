export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
/*
    if(user && user.token) {
        return {'x-acccess-token': user.token}; //x-acccess-token
    } else {
        return {};
    }*/

    var config = {
        headers: {'Authorization': user.token }
      };
      return config;
}