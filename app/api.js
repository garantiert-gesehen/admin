import axios from 'axios';

export const login = (data) => {
  return axios.post('/api/login/', data)
    .then(({ data }) => data.user)
    .catch(() => {
      throw new Error('wrong login or password');
    });
};

export const logout = () => axios.post('/api/logout');

export const getLocationStructure = () => {
  return axios.get('/api/locationStructures/current')
    .then(res => res.data.fields)
    .catch(() => {
      throw new Error('wrong get request for location structure');
    });
};

export const updateLocationStructure = (data) => {
  return axios.put('/api/locationStructures/current', data)
    .then(res => res.data.fields)
    .catch(() => {
      throw new Error('wrong update request for location structure');
    });
};

export const getLocations = () => {
  return axios.get('/api/locations')
    .then(res => res.data)
    .catch(() => {
      throw new Error('wrong get request for locations');
    });
};

export const updateLocationField = ({ fieldId, locationId, value }) => {
  return axios.patch(`/api/locations/${locationId}/${fieldId}`, { value })
    .then(res => res.data)
    .catch(() => {
      throw new Error('wrong update request for location field');
    });
};

export const createLocation = () => {
  return axios.post('/api/locations')
    .then(res => res.data.location)
    .catch(() => {
      throw new Error('wrong create request for location');
    });
};

export const deleteLocation = (locationId) => {
  return axios.delete(`/api/locations/${locationId}`)
    .then(res => res.data)
    .catch(() => {
      throw new Error('wrong delete request for location');
    });
};

export const getLists = () => {
  return axios.get('/api/lists')
    .then(res => res.data)
    .catch(() => {
      throw new Error('wrong get request for lists');
    });
};

export const updateList = (listId, name, items) => {
  return axios.put(`/api/lists/${listId}`, { name, items })
    .then(res => res.data)
    .catch(() => {
      throw new Error('wrong update request for lists');
    });
};

export const createList = (name, items) => {
  return axios.post('/api/lists', { name, items })
    .then(res => res.data)
    .catch(() => {
      throw new Error('wrong create request for lists');
    });
};

export const deleteList = (listId) => {
  return axios.delete(`/api/lists/${listId}`)
    .then(res => res.data)
    .catch(() => {
      throw new Error('wrong delete request for list');
    });
};
