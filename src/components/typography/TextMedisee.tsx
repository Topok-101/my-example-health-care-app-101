import React, {Children, FC, useEffect} from 'react'
import {Text, TextStyle} from 'react-native'

import {CustomTextProps} from 'types/components'

import {useLanguageStore} from 'storez'

import {useTranslator} from 'hooks'

import i18n from 'configs/i18n'
import {colors} from 'configs/theme'

import {textHealthCareStyles} from './styles/textHealthCare.style'

const TextHealthCare: FC<CustomTextProps> = ({
  children,
  textType = 'regular',
  style,
  fontType = 'ibm',
  ...props
}): JSX.Element => {
  const {language} = useLanguageStore()
  const [text, mapTranslate] = useTranslator(Children.toArray(children))

  i18n.locale = language

  useEffect(() => {
    mapTranslate(Children.toArray(children))
  }, [children])

  let textStyle: TextStyle
  const passedStyles: TextStyle = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style
  switch (textType) {
    case 'bold':
      textStyle = textHealthCareStyles(language, fontType)().bold
      break
    case 'extraLight':
      textStyle = textHealthCareStyles(language, fontType)().extraLight
      break
    case 'light':
      textStyle = textHealthCareStyles(language, fontType)().light
      break
    case 'medium':
      textStyle = textHealthCareStyles(language, fontType)().medium
      break
    case 'semibold':
      textStyle = textHealthCareStyles(language, fontType)().semibold
      break
    default:
      textStyle = textHealthCareStyles(language, fontType)().regular
      break
  }

  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[
        textStyle,
        {...passedStyles},
        {color: passedStyles?.color ?? colors.greyColorsGrey900}
      ]}>
      {text}
    </Text>
  )
}

export default TextHealthCare
