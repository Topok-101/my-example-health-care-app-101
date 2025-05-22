import {Config, NativeConfig} from 'react-native-config'

const config: NativeConfig = Config

export default {
  GOOGLE_WEB_CLIENT_ID: config.GOOGLE_WEB_CLIENT_ID,
  GOOGLE_IOS_CLIENT_ID: config.GOOGLE_IOS_CLIENT_ID,
  FACEBOOK_APP_ID: config.FACEBOOK_APP_ID,
  ENV: config.ENV,
  API_ENDPOINT: config.API_ENDPOINT,
  GOOGLE_MAP_KEY: config.GOOGLE_MAP_KEY,
  GOOGLE_GEOCODING_KEY: config.GOOGLE_GEOCODING_KEY
}
