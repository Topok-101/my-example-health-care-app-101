import React from 'react'

import {
  AppointmentDetailScreen,
  MakeAppointmentScreen
} from 'features/appointment'

import {createStackNavigator} from '@react-navigation/stack'

import {namesScreen} from 'const'

const Stack = createStackNavigator()

export default function AppointmentStack() {
  return (
    <Stack.Navigator
      initialRouteName={namesScreen.AppointmentDetailScreen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={namesScreen.AppointmentDetailScreen}
        component={AppointmentDetailScreen}
      />
      <Stack.Screen
        name={namesScreen.MakeAppointmentScreen}
        component={MakeAppointmentScreen}
      />
    </Stack.Navigator>
  )
}
