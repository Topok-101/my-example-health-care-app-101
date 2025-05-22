import React from 'react'

import {HistoryPointScreen, HowToAccumulateScreen, MembershipsScreen, TierMemberScreen} from 'features/memberships'

import {createStackNavigator} from '@react-navigation/stack'

import {namesScreen} from 'const'

const Stack = createStackNavigator()

export default function MembershipsStack() {
  return (
    <Stack.Navigator
      detachInactiveScreens={false}
      initialRouteName={namesScreen.MembershipsScreen} 
      screenOptions={{headerShown: false}}
      >
      <Stack.Screen
        name={namesScreen.MembershipsScreen}
        component={MembershipsScreen}
      />
      <Stack.Screen
        name={namesScreen.OrderMemberScreen}
        component={TierMemberScreen}
      />
      <Stack.Screen 
        name={namesScreen.HistoryPointScreen}
        component={HistoryPointScreen}
      />
      <Stack.Screen 
        name={namesScreen.HowToAccumulateScreen}
        component={HowToAccumulateScreen}
      />
    </Stack.Navigator>
  )
}
