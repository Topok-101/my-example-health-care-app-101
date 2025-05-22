import Lottie from 'lottie-react-native'
import React from 'react'
import {StyleSheet, View, ViewStyle} from 'react-native'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

type LottieType = {
  lottiePath: string
  lottieStyle?: ViewStyle
  lottieContainer?: ViewStyle
  autoplay?: boolean
  loop?: boolean
}

const LottieView = ({lottiePath, lottieStyle, lottieContainer}: LottieType) => {
  return (
    <View style={[lottieContainer || styles.container]}>
      <Lottie source={lottiePath} style={lottieStyle} autoPlay loop />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: verticalScale(100),
    height: horizontalScale(60),
    borderRadius: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default LottieView
