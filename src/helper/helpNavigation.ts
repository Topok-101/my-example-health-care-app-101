import {createNavigationContainerRef} from '@react-navigation/native'

export const navigationRef =
  createNavigationContainerRef<ReactNavigation.RootParamList>()

export function navigate(name: never, param?: never) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, param!)
  }
}
