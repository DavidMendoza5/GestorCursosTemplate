export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if(user && user.token) {
        return {'x-acccess-token': user.token};
    } else {
        return {};
    }
}