import axios from "../setup/axios";

const fetAllProduct = (page, limit) => {
    return axios.get(`/api/admin/products/read?page=${page}&limit=${limit}`);
};

const deleteProduct = (user) => {
    return axios.delete('/api/admin/products/delete', { data: { id: user.id } });
}

const createProduct = async (data) => {
    return await axios.post('/api/admin/products/create', { ...data }, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
        }
    });
}

const updateUser = (userData) => {
    return axios.put('/api/admin/users/update', { ...userData });
}


const fetchListProduct = () => {
    return axios.get('/api/admin/products/listProduct');
};

export {
    fetAllProduct,
    deleteProduct,
    createProduct,

    updateUser,
    fetchListProduct,
};