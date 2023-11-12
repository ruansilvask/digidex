import axios from 'axios';

const ApiPathBase = axios.create({
  baseURL: 'https://digimon-api.com/api/v1',
});

export default ApiPathBase;
