import {DataSource} from '@shopify/react-native-skia'
import React from 'react'
import {StyleSheet, View} from 'react-native'

import {SVGComponent} from 'components'
import {BetterImage} from 'components/typography'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'

const IconWithRactangle = (props: {
  source?: number
  width?: number
  height?: number
  iconColor?: string
  widthRounder?: number
  heightRounder?: number
  backgroundColor?: string
  svg?: DataSource
  borderRadius?: number
}) => {
  const {
    source,
    height,
    width,
    iconColor,
    heightRounder = 40,
    widthRounder = 40,
    backgroundColor = colors.blue50,
    borderRadius = 0,
    svg
  } = props
  return (
    <View
      style={[
        styles().container,
        {
          borderRadius: borderRadius,
          width: moderateScale(widthRounder),
          height: moderateScale(heightRounder),
          backgroundColor: backgroundColor
        }
      ]}>
      {source && (
        <BetterImage
          source={source}
          style={styles(width, height).img}
          tintColor={iconColor}
        />
      )}
      {svg && (
        <SVGComponent height={height || 0} width={width || 0} source={svg} />
      )}
    </View>
  )
}

export default IconWithRactangle

const styles = (w?: number, h?: number) =>
  StyleSheet.create({
    img: {
      width: moderateScale(w || 19),
      height: moderateScale(h || 17)
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
