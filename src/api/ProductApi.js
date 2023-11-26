import axiosClients from '../AxiosClient';
const ProductApi = {
  getAllProduct: () => {
    const url = `/product`;
    return axiosClients.get(url);
  },
  getBestSaleOff: () => {
    const url = `/product/getBestSaleOff`;
    return axiosClients.get(url);
  },
  getByCategory: (id) => {
    const url = `/product/getByCategory?categoryId=` + id;
    return axiosClients.get(url);
  },
  getByBrand: (id) => {
    const url = `/product/getByBrand?brandId=` + id;
    return axiosClients.get(url);
  },
  createProduct: (data) => {
    const url = '/product';
    return axiosClients.post(url, data);
  },
};

export default ProductApi;
