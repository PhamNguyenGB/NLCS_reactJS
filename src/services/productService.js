import axios from "../setup/axios";

const fetAllProduct = (page, limit) => {
    return axios.get(`/api/admin/products/read?page=${page}&limit=${limit}`);
};

const deleteProduct = (user) => {
    return axios.delete('/api/admin/users/delete', { data: { id: user.id } });
}

const createProduct = (data) => {
    return axios.post('/api/admin/products/create', { ...data });
}

const updateUser = (userData) => {
    return axios.put('/api/admin/users/update', { ...userData });
}

const getUserAccount = () => {
    return axios.get('/api/account');
}

const logoutUser = () => {
    return axios.post('/api/logout');
};

export {
    fetAllProduct,
    deleteProduct,
    createProduct,

    updateUser,
    getUserAccount,
};