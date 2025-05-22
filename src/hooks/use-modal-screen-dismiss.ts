import {useEffect} from 'react'

import {useNavigation} from '@react-navigation/native'

const useDismissModalScreen = (handle: () => void) => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.addListener('beforeRemove', () => {
      handle()
      return
    })
  }, [navigation])
}

export default useDismissModalScreen
