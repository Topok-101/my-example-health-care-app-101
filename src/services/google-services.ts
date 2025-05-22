import axios from 'axios'
import {env} from 'configs'

export const getLocationName = (latitude: number, longitude: number) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${env.GOOGLE_GEOCODING_KEY}`
  return axios
    .get(url)
    .then(response => {
      const result = response.data.results[0]
      const location = result.address_components
      return location
    })
    .catch(error => {
      throw error
    })
}
