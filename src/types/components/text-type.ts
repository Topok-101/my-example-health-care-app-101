import React from 'react'
import {TextProps, TextStyle} from 'react-native'

import {colors} from 'configs/theme'

export type CustomTextProps = {
  children?: React.ReactNode
  style?: TextStyle | TextStyle[]
  textType?: ITextWeightType
  fontType?: IFontThaiType
  isActive?: boolean
  activeColor?: typeof colors
} & TextProps

export type CustomTextNumberProps = {
  style?: TextStyle | TextStyle[]
  textType?: ITextWeightType
  fontType?: IFontThaiType
  number?: number
}

export type ITextWeightType =
  | 'regular'
  | 'bold'
  | 'light'
  | 'medium'
  | 'semibold'
  | 'extraLight'

export type IFontThaiType = 'jm' | 'ibm' | 'inter'
