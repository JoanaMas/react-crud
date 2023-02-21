import axios from 'axios';
import { RestaurantsModel } from 'models/restaurant-model';

const api = axios.create({
    baseURL: 'http://localhost:5024',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
  });

  const fetchRestaurants = async () => {
    const response = await api.get<RestaurantsModel[]>('/restaurants')

    return response.data;
  }

  const ApiService = {
    fetchRestaurants
  }

  export default ApiService;