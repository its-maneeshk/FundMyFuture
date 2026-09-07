import api from './api';

export const getScholarships = async () => {
  const response = await api.get('/scholarships');
  return response.data;
};