export interface RestaurantsModel {
  id?: string,
  name: string,
  title: string,
  phone: string,
  website?: string,
  rating?: number,
  location: {
    address: string,
    city: string,
  },
  images: string[]
}
