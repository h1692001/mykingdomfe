import axiosClients from '../AxiosClient';
const AuthApi = {
  register: (data) => {
    const url = `/auth/register`;
    return axiosClients.post(url, data);
  },
};

export default AuthApi;
