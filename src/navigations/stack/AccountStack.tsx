import React from 'react'

import {AccountScreen, ChangePasswordScreen, DetailAccountScreen,SettingScreen} from 'features/accounts'

import {createStackNavigator} from '@react-navigation/stack'

import {namesScreen} from 'const'

const Stack = createStackNavigator()

export default function AccountStack() {
  return (
    <Stack.Navigator initialRouteName={namesScreen.AccountScreen} screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={namesScreen.AccountScreen}
        component={AccountScreen}
      />
      <Stack.Screen
        name={namesScreen.DetailAccountScreen}
        component={DetailAccountScreen}
      />
      <Stack.Screen
        name={namesScreen.SettingScreen}
        component={SettingScreen}
      />
       <Stack.Screen
        name={namesScreen.ChangePasswordScreen}
        component={ChangePasswordScreen}
      />
    </Stack.Navigator>
  )
}
