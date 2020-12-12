import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID GN5r9eSb-WozqNL9CpK71HdbY58YQjuSyoaSxcr9krE'
  }
});
