/**
 * @format
 */
import App from 'features/App'
import {AppRegistry} from 'react-native'
import 'react-native-gesture-handler'
import 'react-native-reanimated'

import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => App)
