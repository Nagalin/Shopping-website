import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    common: {
        // Retrieve the token from storage
      'Authorization': `Bearer ${localStorage.getItem('jwtToken')}` 
    }
  }
});

export default axiosInstance;
