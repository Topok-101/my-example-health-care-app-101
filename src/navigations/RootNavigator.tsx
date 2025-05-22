import AsyncStorage from '@react-native-async-storage/async-storage'
import NetInfo from '@react-native-community/netinfo'
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth'
import {i18n} from 'configs'
import React, {useEffect} from 'react'
import {Linking, Platform} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import {useLanguageStore} from 'storez'
import {useAuthStore} from 'storez/auth'

import {StatusBar} from 'components'
import {ModalClassic} from 'components/modal'

import {LoadingEntireScreen} from 'features/loading'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {colors} from 'configs/theme'

import AppStack from './stack/AppStack'
import AuthStack from './stack/AuthStack'
import ErrorStack from './stack/ErrorStack'

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1'
const Stack = createStackNavigator()

function RootNavigator(): JSX.Element {
  const [Network, setNetwork] = React.useState<boolean | null>(true)
  const {language} = useLanguageStore()

  const {userToken, setSetItemUserFirebase, userFirebase, setLogout} =
    useAuthStore()
  //init language

  React.useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetwork(state.isConnected)
    })

    return () => {
      // Unsubscribe to network state updates
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(
      userState => userState && onAuthStateChanged(userState)
    )

    return () => subscriber()
  }, [])

  const onAuthStateChanged = (user: FirebaseAuthTypes.User) => {
    if (user) {
      // Signed in
      setSetItemUserFirebase(user.toJSON())
    } else {
      // Signed out
      setLogout()
    }
  }

  const checkSession = (): boolean => {
    return [!userFirebase, userToken?.accessToken === ''].every(
      currentValue => currentValue === true
    )
  }

  const [isReady, setIsReady] = React.useState(false)
  const [initialState, setInitialState] = React.useState()

  const onReady = () => {
    SplashScreen.hide()
    i18n.locale = language
  }

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL()

        if (Platform.OS !== 'web' && initialUrl == null) {
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY)
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined

          if (state !== undefined) {
            setInitialState(state)
          }
        }
      } finally {
        setIsReady(true)
      }
    }

    if (!isReady) {
      restoreState()
    }
  }, [isReady])

  if (!isReady) {
    return <></>
  }

  return (
    <NavigationContainer
      onReady={onReady}
      initialState={initialState}
      onStateChange={state =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }>
      <LoadingEntireScreen />
      <ModalClassic />
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
        animated={true}
        backgroundColor={colors.blue600}
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group>
          {checkSession() ? (
            <>
              <Stack.Screen component={AuthStack} name={'AuthStack'} />
            </>
          ) : (
            <>
              {Network ? (
                <Stack.Screen component={AppStack} name={'AppStack'} />
              ) : (
                <Stack.Screen component={ErrorStack} name={'ErrorStack'} />
              )}
            </>
          )}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
