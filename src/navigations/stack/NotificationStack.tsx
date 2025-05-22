import React from 'react'

import {NotificationScreen} from 'features/notification'

import {createStackNavigator} from '@react-navigation/stack'

import {namesScreen} from 'const'

const Stack = createStackNavigator()

export default function NotificationStack() {
  return (
    <Stack.Navigator
      detachInactiveScreens={false}
      initialRouteName={namesScreen.NotificationScreen}
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name={namesScreen.NotificationScreen}
        component={NotificationScreen}
      />
    </Stack.Navigator>
  )
}
