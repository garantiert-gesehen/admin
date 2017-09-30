import axios from 'axios';

export const login = (data) => {
  return axios.post('/api/login/', data)
    .then(({ data }) => data.user)
    .catch(() => {
      throw new Error('wrong login or password');
    });
};

export const logout = () => axios.post('/api/logout/');

export const getLocationStructure = () => {
  return axios.get('/api/locationStructures/current/')
    .then(res => res.data.fields)
    .catch(() => {
      throw new Error('wrong get request for location structure');
    });
};

export const updateLocationStructure = (data) => {
  return axios.post('/api/locationStructures/current/', data)
    .then(res => res.data.fields)
    .catch(() => {
      throw new Error('wrong update request for location structure');
    });
};
