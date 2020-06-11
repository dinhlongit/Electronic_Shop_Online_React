import axios from 'axios';

export default axios.create({
  baseURL: `http://nhom5.azurewebsites.net/public/api/`,//YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  }
});
