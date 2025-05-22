import React from 'react'

import {CourseDetailScreen} from 'features/course'

import {createStackNavigator} from '@react-navigation/stack'

import {namesScreen} from 'const'

const Stack = createStackNavigator()

export default function CourseStack() {
  return (
    <Stack.Navigator
      initialRouteName={namesScreen.CourseDetailScreen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={namesScreen.CourseDetailScreen}
        component={CourseDetailScreen}
      />
    </Stack.Navigator>
  )
}
