import {Platform, StatusBar} from 'react-native'
import {
  useSafeAreaFrame,
  useSafeAreaInsets
} from 'react-native-safe-area-context'

import {getDefaultHeaderHeight} from '@react-navigation/elements'

import {verticalScale} from 'helper'

const frame = useSafeAreaFrame()
const insets = useSafeAreaInsets()
const StatusBarH = StatusBar.currentHeight || 0

export const headerHeight = getDefaultHeaderHeight(frame, false, insets.top)

export const getHeight = {
  top:
    Platform.OS === 'ios'
      ? verticalScale(headerHeight / 2)
      : verticalScale(headerHeight / 2) - StatusBarH / 2
}
