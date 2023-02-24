import axios from 'axios';
import { RestaurantsModel } from 'models/restaurant-model';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const fetchRestaurants = async () => {
  const response = await api.get<RestaurantsModel[]>('/restaurants');

  return response.data;
};

const fetchRestaurant = async (id: string | number) => {
  const response = await api.get<RestaurantsModel>(`/restaurants/${id}`);

  return response.data;
};

const createRestaurant = async (values: RestaurantsModel) => {
  const response = await axios.post('http://localhost:5024/restaurants', values);

  return response.data;
};

const deleteRestaurant = async (id: string | undefined) => {
  const response = await axios.delete(`http://localhost:5024/restaurants/${id}`);

  return response.data;
};

const ApiService = {
  fetchRestaurants,
  fetchRestaurant,
  createRestaurant,
  deleteRestaurant,
};

export default ApiService;
