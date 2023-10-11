import axios from "axios";

const registerNewuser = (username, password, phone, email, address) => {
    return axios.post('http://localhost:8888/api/register', {
        username, password, phone, email, address
    })
}

const loginUser = (username, password) => {
    return axios.post('http://localhost:8888/api/login', {
        username, password
    })
}

export {
    registerNewuser,
    loginUser,
};