import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated'

const animatedOnboardingScreen = (dot: number) => {
  const offsetNext = useSharedValue(0)
  const opacityNext = useSharedValue(1)
  const offsetButton = useSharedValue(0)
  const opacityButton = useSharedValue(1)

  const nextAnimationStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: offsetNext.value}],
      opacity: opacityNext.value
    }
  })

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: offsetButton.value}],
      opacity: opacityButton.value
    }
  })

  const onCarouselDrag = () => {
    if (dot === 2) {
      opacityButton.value = withTiming(0, {
        duration: 700
      })
      offsetButton.value = withTiming(30, {
        duration: 1000
      })
    } else {
      opacityNext.value = withTiming(1)
      offsetNext.value = withSpring(0)
    }
  }
  const onCarouselChange = () => {
    if (dot === 2) {
      opacityNext.value = withSpring(0)
      offsetButton.value = withTiming(-30, {
        duration: 500
      })
      opacityButton.value = withSpring(1)
    } else {
      opacityNext.value = withSpring(1)
      offsetNext.value = withSpring(0)
    }
  }

  const onCarouselEnd = () => {
    if (dot === 2) {
      opacityButton.value = withTiming(1)
      offsetButton.value = withTiming(-30, {
        duration: 500
      })
    }
  }
  return {
    nextAnimationStyles,
    buttonAnimationStyle,
    onCarouselDrag,
    onCarouselChange,
    onCarouselEnd
  }
}

export default animatedOnboardingScreen
