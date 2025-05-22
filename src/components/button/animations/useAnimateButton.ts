import {useEffect} from 'react'
import {
  Easing,
  Extrapolate,
  cancelAnimation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming
} from 'react-native-reanimated'

const useAnimateButton = (isLoading: boolean) => {
  const slideOutValue = useSharedValue(0)

  useEffect(() => {
    if (isLoading) {
      slideOutValue.value = withSequence(
        withTiming(0, {
          duration: 100,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1)
        }),
        withTiming(1, {
          duration: 500,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1)
        })
      )
    } else {
      slideOutValue.value = withSequence(
        withTiming(1, {
          duration: 100,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1)
        }),
        withTiming(0, {
          duration: 500,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1)
        })
      )
    }
    return () => cancelAnimation(slideOutValue)
  }, [isLoading])

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(slideOutValue.value, [0, 1], [0, -10], {
      extrapolateRight: Extrapolate.CLAMP
    })
    const opacity = interpolate(slideOutValue.value, [1, 0], [0, 1], {
      extrapolateRight: Extrapolate.CLAMP
    })
    return {
      transform: [{translateX}],
      opacity
    }
  })
  const animatedStyleLoading = useAnimatedStyle(() => {
    // const scale = interpolate(slideOutValue.value, [0, 1], [1, 0.8], {
    //   extrapolateRight: Extrapolate.CLAMP,
    // });
    // const translateX = interpolate(slideOutValue.value, [0, 1], [0, 0], {
    //   extrapolateRight: Extrapolate.CLAMP
    // })
    const scale = interpolate(slideOutValue.value, [0, 1], [1, 1.25], {
      extrapolateRight: Extrapolate.CLAMP
    })
    const opacity = interpolate(slideOutValue.value, [1, 0], [1, 0], {
      extrapolateRight: Extrapolate.CLAMP
    })
    return {
      transform: [{scale}],
      opacity
    }
  })
  const animatedStyleText = useAnimatedStyle(() => {
    const translateX = interpolate(slideOutValue.value, [0, 1], [0, 50], {
      extrapolateRight: Extrapolate.CLAMP
    })
    const opacity = interpolate(slideOutValue.value, [1, 0], [0, 1], {
      extrapolateRight: Extrapolate.CLAMP
    })
    return {
      transform: [{translateX}],
      opacity
    }
  })

  return {
    animatedStyle,
    animatedStyleLoading,
    animatedStyleText
  }
}

export default useAnimateButton
