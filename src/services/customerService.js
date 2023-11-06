import axios from "../setup/axios";

const fetAllProduct = (page, limit) => {
    return axios.get(`/api/products/read?page=${page}&limit=${limit}`);
};

const detailProduct = (name, id) => {
    return axios.get(`/api/product/${name}/${id}`);
}

const getListProduct = (categoryName, page, limit) => {
    return axios.get(`/api/listProduct/${categoryName}?page=${page}&limit=${limit}`);
}

const getOrderDetail = () => {
    return axios.get(`/api/shoppingCart`);
}

const addCart = (dataUser, dataProduct, quantity) => {
    return axios.post(`/api/products/addCart`, { ...dataUser, ...dataProduct, quantity });
}

const updateCart = (dataUser, dataProduct, quantity) => {
    return axios.put(`/api/products/addCart`, { ...dataUser, ...dataProduct, quantity });
}

const checkOrder = (dataUser) => {
    return axios.post(`/api/checkOrder`, { ...dataUser });
}


// const updateUser = (userData) => {
//     return axios.put('/api/users/update', { ...userData });
// }

// const getUserAccount = () => {
//     return axios.get('/api/account');
// }

// const fetchListProduct = () => {
//     return axios.get('/api/products/listProduct');
// };

export {
    fetAllProduct,
    detailProduct,
    getListProduct,
    getOrderDetail,
    addCart,
    updateCart,
    checkOrder,
};