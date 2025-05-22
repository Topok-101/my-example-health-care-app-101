import React from 'react'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'

import CameraScreen from 'features/camera/CameraScreen'
import {ChatRoomScreen} from 'features/chat'

import {CardStyleInterpolators} from '@react-navigation/stack'

import {names} from 'constants/name-screen'

import AppointmentStack from './AppointmentStack'
import BottomTabStack from './BottomTabStack'
import CourseStack from './CourseStack'
import MembershipsStack from './MembershipsStack'
import NotificationStack from './NotificationStack'

const Stack = createSharedElementStackNavigator()

export default function AppStack() {
  return (
    <Stack.Navigator
      detachInactiveScreens={false}
      initialRouteName={names.HomeScreen}>
      <Stack.Screen
        name={'BottomTabStack'}
        component={BottomTabStack}
        options={{headerShown: false}}
      />
      {/* CameraStack - home */}
      <Stack.Screen
        name={names.CameraScreen}
        component={CameraScreen}
        options={{
          presentation: 'modal',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
        }}
      />
      {/* CameraStack - home */}

      <Stack.Screen
        name={names.CourseStack}
        component={CourseStack}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name={names.MembershipsStack}
        component={MembershipsStack}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name={names.AppointmentStack}
        component={AppointmentStack}
        options={{
          headerShown: false,
          presentation: 'modal',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
        }}
      />
      <Stack.Screen
        name={names.ChatRoomScreen}
        component={ChatRoomScreen}
        options={{
          headerShown: false
        }}
        sharedElements={(route, otherRoute, showing) => {
          if (otherRoute.name === names.ChatMassageScreen && showing) {
            const {idShareElememt} = route.params
            return [{id: idShareElememt, animation: 'move', resize: 'auto'}]
          }
        }}
      />
      <Stack.Screen
        name={names.NotificationStack}
        component={NotificationStack}
        options={{
          headerShown: false,
          presentation: 'modal',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
        }}
      />
    </Stack.Navigator>
  )
}
