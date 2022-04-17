// api/userApi.js
import axiosClient from './axiosClient';

class UserApi {
  getUser = (params) => {
    const url = `/user/${params.id}`;
    return axiosClient.get(url);
  };

  createUser = (params) => {
    const url = `/user`;
    return axiosClient.post(url, params);
  };
}

const userApi = new UserApi();
export default userApi;
