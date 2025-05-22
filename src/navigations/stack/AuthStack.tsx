import React from 'react'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'

import {LoginScreen} from 'features/auth'
import SignUpScreen from 'features/auth/SignUpScreen'
import {ForgetPasswordScreen} from 'features/forget-password'
import {OnBoardingScreen} from 'features/onboarding'

import {
  CardStyleInterpolators,
  StackNavigationOptions
} from '@react-navigation/stack'

import {namesScreen} from 'const'

const Stack = createSharedElementStackNavigator()

const option: StackNavigationOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {duration: 400}
    },
    close: {
      animation: 'spring',
      config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01
      }
    }
  }
}

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      detachInactiveScreens={false}
      initialRouteName={namesScreen.OnBoardingScreen}>
      <Stack.Screen
        name={namesScreen.OnBoardingScreen}
        component={OnBoardingScreen}
      />
      <Stack.Screen
        name={namesScreen.LoginScreen}
        component={LoginScreen}
        options={option}
        sharedElements={(route, otherRoute, showing) => {
          if (otherRoute.name === namesScreen.OnBoardingScreen && showing) {
            const {id} = route.params
            return [{id: id, animation: 'fade', resize: 'auto'}]
          }
        }}
      />
      <Stack.Screen name={namesScreen.SignUpScreen} component={SignUpScreen} />
      <Stack.Screen
        name={namesScreen.ForgetPasswordScreen}
        component={ForgetPasswordScreen}
      />
    </Stack.Navigator>
  )
}
