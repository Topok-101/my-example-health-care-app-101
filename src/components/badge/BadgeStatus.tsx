import React from 'react'
import {StyleSheet, View} from 'react-native'

import {ITextWeightType} from 'types/components/text-type'

import {TextHealthCare} from 'components'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale} from 'helper'

const BadgeStatus: React.FC<{
  TextType?: ITextWeightType
  bgColor?: string
  fontColor?: string
  title?: string
  fontSize?: number
  height?: number
  width?: number
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined
}> = props => {
  const {
    TextType = 'regular',
    bgColor = colors.greenOpacity,
    fontColor = colors.green,
    fontSize = 14,
    title,
    height,
    width = 59,
    textAlign
  } = props

  return (
    <View>
      <View
        style={[
          styles.contentStatus,
          {
            width: horizontalScale(width),
            backgroundColor: bgColor
          },
          height ? {height: moderateScale(height)} : {}
        ]}>
        <TextHealthCare
          style={{
            color: fontColor,
            fontSize: moderateScale(fontSize),
            textAlign: textAlign
          }}
          textType={TextType}>
          {title}
        </TextHealthCare>
      </View>
    </View>
  )
}

export default BadgeStatus

const styles = StyleSheet.create({
  contentStatus: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16
  }
})
