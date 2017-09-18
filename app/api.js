import axios from 'axios';

export const login = (data) => {
  return axios.post('/api/login/', data)
    .then(({ data }) => data.user)
    .catch(() => {
      throw new Error('wrong login or password');
    });
};
