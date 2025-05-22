import React from 'react'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {NavBottomHealthCare} from 'components/bottom-nav-tab'

import {ActivityScreen} from 'features/activity'
import {HomeScreen} from 'features/home'

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'

import {names} from 'constants/name-screen'

import AccountStack from './AccountStack'
import ChatStack from './ChatStack'

const Tab = createBottomTabNavigator()

const option: BottomTabNavigationOptions = {
  tabBarAllowFontScaling: false
}

export default function BottomTabStack() {
  const insets = useSafeAreaInsets()
  return (
    <Tab.Navigator
      tabBar={props => <NavBottomHealthCare {...props} />}
      initialRouteName={names.HomeScreen}
      safeAreaInsets={{bottom: insets.bottom}}
      screenOptions={({route}) => ({
        unmountOnBlur: false,
        headerShown: false,
        tabBarStyle: (route => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? ''
          if (
            routeName === names.DetailAccountScreen ||
            routeName === names.SettingScreen ||
            routeName === names.ChangePasswordScreen ||
            routeName === names.ChatRoomScreen
          ) {
            return false
          }
          return
        })(route)
      })}>
      <Tab.Group>
        <Tab.Screen
          name={names.HomeScreen}
          component={HomeScreen}
          options={{tabBarLabel: '$homeTab', ...option}}
        />
        <Tab.Screen
          name={names.ActivityScreen}
          component={ActivityScreen}
          options={{tabBarLabel: '$activityTab', ...option}}
        />
        <Tab.Screen
          name={names.ChatStack}
          component={ChatStack}
          options={{tabBarLabel: '$chatTab', ...option}}
        />
        <Tab.Screen
          name={names.AccountStack}
          component={AccountStack}
          options={{tabBarLabel: '$accountTab', ...option}}
        />
      </Tab.Group>
    </Tab.Navigator>
  )
}
