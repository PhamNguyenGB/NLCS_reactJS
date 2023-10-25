import axios from "../setup/axios";

const fetAllProduct = (page, limit) => {
    return axios.get(`/api/admin/products/read?page=${page}&limit=${limit}`);
};

const deleteProduct = (user) => {
    return axios.delete('/api/admin/products/delete', { data: { id: user.id } });
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

const fetchListProduct = () => {
    return axios.get('/api/admin/products/listProduct');
};

export {
    fetAllProduct,
    deleteProduct,
    createProduct,

    updateUser,
    getUserAccount,
    fetchListProduct,
};