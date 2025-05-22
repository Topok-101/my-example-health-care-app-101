import {useEffect} from 'react'
import {BackHandler} from 'react-native'

const useHandleAndroidBackPress = (handler: () => boolean) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler)

    return () => BackHandler.removeEventListener('hardwareBackPress', handler)
  }, [handler])
}

export {useHandleAndroidBackPress}
