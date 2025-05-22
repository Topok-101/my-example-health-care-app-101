import React, {FC} from 'react'
import {Animated, StyleSheet, Text, TextStyle, View} from 'react-native'

import {CustomTextNumberProps, IFontThaiType} from 'types/components/text-type'
import {LanguageType} from 'types/zustand'

import {useLanguageStore} from 'storez'

import numberChangeAnimate from './animations/numberChangeAnimate'

const NumberHealthCare: FC<CustomTextNumberProps> = ({
  textType = 'regular',
  style,
  fontType = 'ibm',
  number = 0
}): JSX.Element => {
  const {language} = useLanguageStore()
  const {animatedCurrStyles, animatedPrevStyles, currentValue, prevValue} =
    numberChangeAnimate(number)

  let textStyle: TextStyle
  const passedStyles: TextStyle = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style
  switch (textType) {
    case 'bold':
      textStyle = styles(language, fontType)().bold
      break
    case 'extraLight':
      textStyle = styles(language, fontType)().extraLight
      break
    case 'light':
      textStyle = styles(language, fontType)().light
      break
    case 'medium':
      textStyle = styles(language, fontType)().medium
      break
    case 'semibold':
      textStyle = styles(language, fontType)().semibold
      break
    default:
      textStyle = styles(language, fontType)().regular
      break
  }

  return (
    <View>
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: 0,
            opacity: 0,
            minWidth: 24
          },
          animatedPrevStyles
        ]}>
        <Text
          style={[textStyle, {textAlign: 'right'}, {...passedStyles}]}
          allowFontScaling={false}>
          {prevValue.current}
        </Text>
      </Animated.View>
      <Animated.View style={[animatedCurrStyles, {minWidth: 24}]}>
        <Text
          style={[textStyle, {textAlign: 'right'}, {...passedStyles}]}
          allowFontScaling={false}>
          {currentValue}
        </Text>
      </Animated.View>
    </View>
  )
}

const styles = (_lang: LanguageType, fontType: IFontThaiType) =>
  StyleSheet.create(() => {
    let fontLang = 'Inter'
    switch (_lang) {
      case 'th':
        fontLang = fontType === 'ibm' ? 'IBMPlexSansThai' : 'BaiJamjuree'
        break
      case 'en':
        fontLang = 'Inter'
        break
      case 'zh':
        fontLang = 'IBMPlexSansThai'
        break
    }

    return {
      prevNumber: {
        position: 'absolute',
        top: 0,
        opacity: 0
      },
      regular: {
        fontFamily: `${fontLang}-Regular`
      },
      bold: {
        fontFamily: `${fontLang}-Bold`
      },
      light: {
        fontFamily: `${fontLang}-Light`
      },
      semibold: {
        fontFamily: `${fontLang}-SemiBold`
      },
      medium: {
        fontFamily: `${fontLang}-Medium`
      },
      extraLight: {
        fontFamily: `${fontLang}-ExtraLight`
      }
    }
  })

export default NumberHealthCare
