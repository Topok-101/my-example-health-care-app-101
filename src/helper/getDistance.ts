import {getPreciseDistance} from 'geolib'

export const calculatePreciseDistance = (
  fa: {
    lat: number
    long: number
  },
  da: {
    lat: number
    long: number
  }
): number => {
  const pdis = getPreciseDistance(
    {latitude: fa.lat, longitude: fa.long},
    {latitude: da.lat, longitude: da.long}
  )
  return pdis
}
