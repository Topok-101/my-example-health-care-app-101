import {useEffect} from 'react'
// import {Vibration} from 'react-native'
import {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming
} from 'react-native-reanimated'

import {AnimetedInterpolateInputAwesomeShake} from 'types/components'

import {colors} from 'configs/theme'

const animatedSmallText = (
  value: string,
  isFoucusing: boolean,
  isError: boolean
) => {
  const focusValue = useSharedValue(0)
  const shakeValue = useSharedValue(0)

  useEffect(() => {
    if (isFoucusing || value !== '' || isError) {
      focusValue.value = withSequence(
        withTiming(1, {
          duration: 500,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1)
        })
      )
    } else {
      focusValue.value = withSequence(
        withTiming(0, {
          duration: 500,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1)
        })
      )
    }
  }, [isFoucusing])
  useEffect(() => {
    shakeValue.value = withSequence(
      withTiming(-5, {duration: 100}),
      withTiming(5, {duration: 100}),
      withTiming(0, {duration: 100})
    )
    if (isError) {
      // Vibration.vibrate()

      focusValue.value = withSequence(
        withTiming(1, {
          duration: 500,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1)
        })
      )
    } else if (!isError && value === '') {
      focusValue.value = withSequence(
        withTiming(0, {
          duration: 500,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1)
        })
      )
    }
  }, [isError])
  const animatedValueStyle = useAnimatedStyle(() => {
    const borderColorFocus = isError ? colors.red : colors.blue600

    const borderColor = interpolateColor(
      focusValue.value,
      [0, 1],
      [colors.greyColorsGrey400, borderColorFocus]
    )
    return {borderColor}
  }, [value, isFoucusing, isError])

  const animatedShakeStyle = ({
    isShake
  }: AnimetedInterpolateInputAwesomeShake) =>
    useAnimatedStyle(() => {
      // const transform = [{translateX: `${shakeValue.value}`}]
      const transform = [
        {
          translateX: shakeValue.value
        }
      ]

      return isShake ? {transform} : {}
    }, [isShake])

  return {animatedValueStyle, animatedShakeStyle}
}

export default animatedSmallText
