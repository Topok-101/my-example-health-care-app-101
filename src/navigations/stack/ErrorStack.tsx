import React from 'react'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'

import NoNetWorkScreen from 'features/error/NoNetWorkScreen'

import {CardStyleInterpolators} from '@react-navigation/stack'

import {names} from 'constants/name-screen'

const Stack = createSharedElementStackNavigator()

export default function ErrorStack() {
  return (
    <Stack.Navigator
      initialRouteName={names.NoNetWorkScreen}
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
      }}>
      <Stack.Screen component={NoNetWorkScreen} name={names.NoNetWorkScreen} />
    </Stack.Navigator>
  )
}
