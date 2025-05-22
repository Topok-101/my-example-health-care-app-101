import React from 'react'
import {findNodeHandle} from 'react-native'
import {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

import {IonScrolling} from 'types/features'

import {colors} from 'configs/theme'

import {verticalScale} from 'helper'

export function onScrolling({
  top,
  translationY,
  ref,
  alreadyRenderT1,
  alreadyRenderT2,
  refT1,
  refT2
}: IonScrolling) {
  const tops = useDerivedValue(() => {
    return top
  }, [top])
  const diffTops = useSharedValue(verticalScale(6.5))
  const headerTop = useSharedValue(verticalScale(44 - 16))
  const paddingTop = useSharedValue(verticalScale(8))
  const HeightT1 = useSharedValue(0)
  const HeightT2 = useSharedValue(0)
  const newUp = useSharedValue(0)

  React.useEffect(() => {
    const refHandle = findNodeHandle(ref.current)
    const refHandleT2 = findNodeHandle(refT2.current)
    let checkItem: {
      left: number
      top: number
      width: number
      height: number
    } | null = null

    if (refT1.current && refHandle && refT2.current && refHandleT2) {
      refT1.current.measureLayout(
        refHandle,
        (left: number, top: number, width: number, height: number) => {
          checkItem = {left, top, width, height}
          HeightT1.value = height + tops.value + diffTops.value
        },
        () => checkItem
      )

      refT2.current.measureLayout(
        refHandleT2,
        (left: number, top: number, width: number, height: number) => {
          checkItem = {left, top, width, height}
          HeightT2.value = height
        },
        () => checkItem
      )
    }
  }, [alreadyRenderT1, alreadyRenderT2, tops.value])

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y
  })

  const stylesAnimated = useAnimatedStyle(() => {
    newUp.value =
      translationY.value < 0
        ? HeightT1.value + Math.abs(translationY.value)
        : HeightT1.value

    return {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      paddingTop: interpolate(
        translationY.value,
        [
          ((newUp.value - (headerTop.value + tops.value)) / 4) * 3,
          newUp.value - (headerTop.value + top) + 1
        ],
        [0, tops.value === 0 ? paddingTop.value : tops.value],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          scale: interpolate(
            translationY.value,
            [
              ((newUp.value - (headerTop.value + tops.value)) / 4) * 3,
              newUp.value - (headerTop.value + tops.value) + 1
            ],
            [0.98, 1],
            Extrapolate.CLAMP
          )
        },
        {
          translateY: interpolate(
            translationY.value,
            [0, newUp.value],
            [newUp.value, 0],
            Extrapolate.CLAMP
          )
        }
      ]
    }
  }, [HeightT1.value])

  const stylesAnimatedPaddingTop = useAnimatedStyle(() => {
    return {
      paddingTop: HeightT2.value
    }
  }, [HeightT2.value])

  const enteringOpa = () => {
    'worklet'

    const initialValues = {
      opacity: 0
    }
    const animations = {
      opacity: withTiming(1, {duration: 800, easing: Easing.exp})
    }

    return {
      initialValues,
      animations
    }
  }

  const onPressTouch = () => {
    ref.current?.scrollToOffset({offset: 0, animated: true})
  }

  return {
    scrollHandler,
    stylesAnimated,
    onPressTouch,
    enteringOpa,
    stylesAnimatedPaddingTop
  }
}
