import {useEffect, useRef} from 'react'
import {Animated} from 'react-native'

import {IReturnNumberAnimationType} from 'types/components/num-typography-type'

const numberChangeAnimate = (number: number): IReturnNumberAnimationType => {
  const prevNumber = useRef<number>(0)

  const animPrevNumber = useRef(new Animated.Value(0)).current
  const animCurrentNumber = useRef(new Animated.Value(0)).current
  const animatedInterpolatePrevPlus = animPrevNumber.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10]
  })

  const interpolatedInterpolatePrevPlus = animPrevNumber.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  })

  const animatedInterpolateCurrPlus = animPrevNumber.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 0]
  })

  const interpolatedInterpolateCurrPlus = animPrevNumber.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })

  const animatedInterpolatePrevMinus = animPrevNumber.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10]
  })

  const interpolatedInterpolatePrevMinus = animPrevNumber.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  })

  const animatedInterpolateCurrMinus = animPrevNumber.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 0]
  })

  const interpolatedInterpolateCurrMinus = animPrevNumber.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })

  const animatedPrevStyles = {
    transform: [
      {
        translateY:
          number < prevNumber.current
            ? animatedInterpolatePrevMinus
            : animatedInterpolatePrevPlus
      }
    ],
    opacity:
      number < prevNumber.current
        ? interpolatedInterpolatePrevMinus
        : interpolatedInterpolatePrevPlus
  }

  const animatedCurrStyles = {
    transform: [
      {
        translateY:
          number < prevNumber.current
            ? animatedInterpolateCurrMinus
            : animatedInterpolateCurrPlus
      }
    ],
    opacity:
      number < prevNumber.current
        ? interpolatedInterpolateCurrMinus
        : interpolatedInterpolateCurrPlus
  }

  useEffect(() => {
    animPrevNumber.setValue(0)
    animCurrentNumber.setValue(0)

    Animated.timing(animPrevNumber, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true
    }).start(() => {
      Animated.timing(animPrevNumber, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      }).start()
    })

    Animated.timing(animCurrentNumber, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start(() => {
      Animated.timing(animCurrentNumber, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      }).start()
    })

    prevNumber.current = number
  }, [number])

  return {
    prevValue: prevNumber,
    currentValue: number,
    animatedCurrStyles,
    animatedPrevStyles
  }
}

export default numberChangeAnimate
