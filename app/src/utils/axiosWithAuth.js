import axios from 'axios';

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://watermyplants-backend.herokuapp.com/api',
    headers: {
      Authorization: token,
    },
  });
};
