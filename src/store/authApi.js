import axios from 'axios';

// Buat instance baru dari Axios
const apiClient = axios.create({
  baseURL: 'http://10.0.0.15:8080/api', // Ganti dengan URL API yang sesuai
  timeout: 5000 // Atur timeout sesuai kebutuhan
});

// Buat kelas Axios untuk digunakan dalam komponen Vue
class AxiosService {
  // Contoh metode GET
  static async signin(data) {
    try {
      const response = await apiClient.post('/auth/signin', {
        username: data.username,
        password: data.password

      });
      return response.data;
    } catch (error) {
      console.log( error);
      throw error;
    }
  }

  // Contoh metode POST
  static async postData(payload) {
    try {
      const response = await apiClient.post('/data', payload);
      return response.data;
    } catch (error) {
      console.error('Error in POST request:', error);
      throw error;
    }
  }

  static async getAll() {
    try {
      const response = await apiClient.get('/auth/getall', {
        headers: {
          Authorization: localStorage.token
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error in GET request:', error);
      throw error;
    }
  }

  // Tambahkan metode lain sesuai kebutuhan (misalnya PUT, DELETE, dll.)
}

// Ekspor kelas Axios untuk digunakan di komponen Vue
export default AxiosService;