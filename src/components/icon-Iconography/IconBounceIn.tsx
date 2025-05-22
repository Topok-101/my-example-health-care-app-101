import React from 'react'
import {Image, StyleSheet} from 'react-native'
import Reanimated, {BounceIn} from 'react-native-reanimated'

import {IConSize} from 'types/components'

import {horizontalScale, verticalScale} from 'helper'

const AnimatedImage = Reanimated.createAnimatedComponent(Image)

const CorrectAwesome = (props: IConSize) => {
  return (
    <AnimatedImage
      entering={BounceIn.delay(100).duration(500)}
      source={props.image}
      resizeMode="contain"
      style={[styles(props).iconImageStyle, {tintColor: props.color}]}
    />
  )
}

export default CorrectAwesome

const styles = (props: IConSize) =>
  StyleSheet.create({
    iconImageStyle: {
      height: verticalScale(props.hight),
      width: horizontalScale(props.width)
    }
  })
