import Geolocation from '@react-native-community/geolocation'
import {useEffect} from 'react'

const useGeoLoccation = () => {
  useEffect(() => {
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      authorizationLevel: 'auto',
      locationProvider: 'auto'
    })
  }, [])
}

export {useGeoLoccation}
