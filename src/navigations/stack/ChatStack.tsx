import React from 'react'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'

import {ChatScreen} from 'features/chat'

import {names} from 'constants/name-screen'

const Stack = createSharedElementStackNavigator()

export default function ChatStack() {
  return (
    <Stack.Navigator
      initialRouteName={names.ChatMassageScreen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={names.ChatMassageScreen} component={ChatScreen} />
    </Stack.Navigator>
  )
}
