import {i18n} from 'configs'
import React, {FC} from 'react'
import {Text} from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming
} from 'react-native-reanimated'

import {IFontThaiType, ITextWeightType} from 'types/components/text-type'

import {useLanguageStore} from 'storez'

import {textHealthCareStyles} from 'components/typography/styles/textHealthCare.style'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'

const AnimatedText = Animated.createAnimatedComponent(Text)

const TextActive: FC<{
  isActive: boolean
  activeTextColor: string
  text: React.ReactNode
  fontType?: IFontThaiType
  textType?: ITextWeightType
  fontSize?: number
}> = ({
  isActive,
  activeTextColor,
  text,
  fontType = 'ibm',
  textType = 'regular',
  fontSize
}) => {
  const {language} = useLanguageStore()

  i18n.locale = language

  const textAnimateValue = useDerivedValue(() => {
    return withTiming(isActive ? 1 : 0, {
      duration: 250
    })
  })

  const textAnimateStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      textAnimateValue.value,
      [0, 1],
      [colors.greyColorsGrey400, activeTextColor]
    )
    return {color}
  })

  return (
    <AnimatedText
      style={[
        textAnimateStyle,
        textHealthCareStyles(language, fontType)()[textType],
        {...(fontSize && {fontSize: moderateScale(fontSize)})}
      ]}>
      {text}
    </AnimatedText>
  )
}

export default TextActive
