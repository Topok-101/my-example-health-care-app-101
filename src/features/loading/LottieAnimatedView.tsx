import Lottie from 'lottie-react-native'
import React from 'react'
import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native'
import Reanimated from 'react-native-reanimated'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

type LottieType = {
  lottiePath: string
  lottieStyle?: ViewStyle
  lottieContainer?: ViewStyle
  autoplay?: boolean
  loop?: boolean
} & Reanimated.AnimateProps<ViewProps>

const AnimatedView = Reanimated.createAnimatedComponent(View)

const LottieAnimatedView = ({
  lottiePath,
  lottieStyle,
  lottieContainer,
  loop,
  autoplay,
  ...animatedProps
}: LottieType) => {
  return (
    <AnimatedView
      style={[lottieContainer || styles.container]}
      {...animatedProps}>
      <Lottie
        source={lottiePath}
        style={lottieStyle}
        autoPlay={autoplay}
        loop={loop}
      />
    </AnimatedView>
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

export default LottieAnimatedView
