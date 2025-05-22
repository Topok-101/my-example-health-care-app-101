import React from 'react'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'

import {ForgetPasswordScreen} from 'features/forget-password'

import {namesScreen} from 'const'

const Stack = createSharedElementStackNavigator()
export default function ResetPasswordStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      detachInactiveScreens={false}
      initialRouteName={namesScreen.ForgetPasswordScreen}>
      <Stack.Screen
        name={namesScreen.ForgetPasswordScreen}
        component={ForgetPasswordScreen}
      />
    </Stack.Navigator>
  )
}
