import api from './api';

export const getScholarships = async () => {
  const response = await api.get('/scholarships');
  return response.data;
};

export const triggerScrape = async () => {
  const response = await api.post('/scrape');
  return response.data;
};

export const verifyScholarship = async (payload) => {
  const response = await api.post('/verify', payload);
  return response.data;
};