import axiosClients from '../AxiosClient';
const BillApi = {
  getAllBrand: () => {
    const url = `/brand`;
    return axiosClients.get(url);
  },
  createBill: (data) => {
    const url = '/bill';
    return axiosClients.post(url, data);
  },
};

export default BillApi;
