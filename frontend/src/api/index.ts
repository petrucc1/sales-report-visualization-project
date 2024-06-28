import axios from 'axios';

const API_BASE_URL = 'http://localhost:5002/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const fetchSales = async () => {
  try {
    const response = await axiosInstance.get('/sales');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar vendas:', error);
    throw error;
  }
};

export default axiosInstance;
