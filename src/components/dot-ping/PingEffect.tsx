import React, {useEffect} from 'react'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming
} from 'react-native-reanimated'

import {pingEffectType} from 'types/components/dot-ping-type'

import {styles} from './style'

export const PingEffect = ({
  delay = 0,
  effectStyle,
  duration = 2000,
  active,
  input,
  output
}: pingEffectType) => {
  const ping = useSharedValue(0)
  const pingStyle = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - ping.value,
      transform: [
        {
          scale: interpolate(ping.value, input || [0, 4], output || [0, 2])
        }
      ]
    }
  })
  useEffect(() => {
    ping.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: duration
        }),
        -1,
        false
      )
    )
  }, [])
  return active ? (
    <Animated.View
      style={[styles.defaultEffect, {...effectStyle}, pingStyle]}
    />
  ) : null
}
