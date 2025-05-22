import {DataSource} from '@shopify/react-native-skia'
import React from 'react'
import {StyleSheet, View} from 'react-native'

import {SVGComponent} from 'components'
import {BetterImage} from 'components/typography'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'
import { Source } from 'react-native-fast-image'

const IconWithRounder = (props: {
  source?: Source | number
  width?: number
  height?: number
  iconColor?: string
  widthRounder?: number
  heightRounder?: number
  backgroundColor?: string
  svg?: DataSource
}) => {
  const {
    source,
    height,
    width,
    iconColor,
    heightRounder = 40,
    widthRounder = 40,
    backgroundColor = colors.blue50,
    svg
  } = props
  return (
    <View
      style={[
        styles().container,
        {
          borderRadius: moderateScale(heightRounder * widthRounder),
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
      {svg && <SVGComponent height={height || 0} width={width || 0} source={svg} />}
    </View>
  )
}

export default IconWithRounder

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
