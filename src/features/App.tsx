import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React from 'react'
import {LogBox, StyleSheet, View} from 'react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {enableLatestRenderer} from 'react-native-maps'

import RootNavigator from 'navigations/RootNavigator'

enableLatestRenderer()

const queryClient = new QueryClient()

export default function App() {
  LogBox.ignoreLogs([
    /NativeEventEmitter/ // react-native-background-timer https://github.com/daily-co/react-native-daily-js/issues/21
  ])

  return (
    <GestureHandlerRootView style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <RootNavigator />
        </View>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
