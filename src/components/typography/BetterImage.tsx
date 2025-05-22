import React from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'
import FastImage from 'react-native-fast-image'
import Reanimated, {useAnimatedStyle, withTiming} from 'react-native-reanimated'

import {PropsBImage} from 'types/components'

import {colors} from 'configs/theme'

export const AnimatedFastImage = Reanimated.createAnimatedComponent(
  FastImage as React.FC<PropsBImage>
)

export const BetterImage: React.FC<PropsBImage> = ({
  onLoad,
  style,
  ...props
}) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isLoading ? 1 : 0, {duration: 500}),
      transform: [{scale: withTiming(isLoading ? 1 : 0.7, {duration: 400})}]
    }
  })

  return (
    <View>
      <AnimatedFastImage
        style={[...(Array.isArray(style) ? style : [style]), animatedStyle]}
        onLoad={evt => {
          onLoad?.(evt)
          setIsLoading(true)
        }}
        {...props}
      />
      {!isLoading && (
        <View style={[StyleSheet.absoluteFill, styles.spinner]}>
          <ActivityIndicator color={colors.blue600} />
        </View>
      )}
    </View>
  )
}

export const JustImage: React.FC<PropsBImage> = ({...props}) => {
  return (
    <View>
      <FastImage {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  spinner: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
