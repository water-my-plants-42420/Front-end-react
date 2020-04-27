import axios from 'axios';

// creating the axios request which is grabbing the token and saving it to the localStorage
export const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token');
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: 'http://localhost:5000',
  });
};
