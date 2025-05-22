import {MutableRefObject} from 'react'
import {Animated} from 'react-native'

export type IReturnNumberAnimationType = {
  currentValue: number
  prevValue: MutableRefObject<number>
  animatedPrevStyles: {
    transform: {
      translateY: Animated.AnimatedInterpolation<string | number>
    }[]
    opacity: Animated.AnimatedInterpolation<string | number>
  }
  animatedCurrStyles: {
    transform: {
      translateY: Animated.AnimatedInterpolation<string | number>
    }[]
    opacity: Animated.AnimatedInterpolation<string | number>
  }
}
