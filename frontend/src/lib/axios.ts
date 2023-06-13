import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    common: {
        // Retrieve the token from storage
      'authorization': `Bearer ${JSON.parse(localStorage.getItem('jwtToken')!)}` 
    }
  }
});

export default axiosInstance;
