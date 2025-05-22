import 'react'
import {interpolateColor, useAnimatedStyle} from 'react-native-reanimated'

import {
  AnimetedInterpolateInputAwesome,
  AnimetedInterpolateInputAwesomeShake,
  TextInputAwesomeAnimateProps
} from 'types/components'

import {colors} from 'configs/theme'

const MAIN_COLOR = colors.blue500
const ORIGINAL_VALUE = 0
const ANIMATED_VALUE = 1

function textInputAwesome(props: TextInputAwesomeAnimateProps) {
  const animatedStyleBorder = ({
    previous,
    nextTo = MAIN_COLOR,
  }: AnimetedInterpolateInputAwesome) =>
    useAnimatedStyle(() => {
      const borderColor = interpolateColor(
        props.valueShereBorder.value,
        [ORIGINAL_VALUE, ANIMATED_VALUE],
        [previous, nextTo]
      )

      return {borderColor}
    }, [props.dependencies])

  const animatedStyleTint = ({
    previous,
    nextTo = MAIN_COLOR
  }: AnimetedInterpolateInputAwesome) =>
    useAnimatedStyle(() => {
      const tintColor = interpolateColor(
        props.valueShereTint.value,
        [ORIGINAL_VALUE, ANIMATED_VALUE],
        [previous, nextTo]
      )
      return {tintColor: tintColor}
    }, [props.dependencies])

  const animatedShakeStyle = ({
    isShake
  }: AnimetedInterpolateInputAwesomeShake) =>
    useAnimatedStyle(() => {
      const transform = [{rotateZ: `${props.valueShereRotation.value}deg`}]

      return isShake ? {transform} : {}
    }, [isShake])

  return {animatedStyleTint, animatedStyleBorder, animatedShakeStyle}
}

export default textInputAwesome
