import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/location';

export const locationService = {
  getAll: async (params = {}) => {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  },

  getDetail: async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  },
};

