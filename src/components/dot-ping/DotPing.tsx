import React from 'react'
import {View} from 'react-native'

import {pingType} from 'types/components/dot-ping-type'

import {PingEffect} from './PingEffect'
import {styles} from './style'

export const DotPing = ({
  dotStyle,
  effectContainer,
  isPing,
  delay,
  effectStyle,
  duration,
  active,
  input,
  output
}: pingType) => {
  const effectProps = {delay, effectStyle, duration, active, input, output}
  return (
    <View style={[styles.defaultDotStyle, {...dotStyle}]}>
      <View style={[styles.defaultEffectContainer, {...effectContainer}]}>
        {isPing && <PingEffect {...effectProps} />}
      </View>
    </View>
  )
}
