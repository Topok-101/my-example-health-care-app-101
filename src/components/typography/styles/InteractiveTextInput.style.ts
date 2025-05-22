import {
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle
} from 'react-native'

import {LanguageType} from 'types/zustand'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

interface Style {
  container: ViewStyle
  iconLeftContainerStyle: ImageStyle
  iconImageStyle: ImageStyle
  iconRightContainerStyle: ViewStyle
  empty: ViewStyle
}

export const _textInputStyle = (
  _lang: LanguageType,
  isIconLeft?: ImageSourcePropType,
  fontFamily?: 'jm' | 'IBM'
): TextStyle => ({
  flex: 1,
  paddingLeft: isIconLeft ? horizontalScale(16) : horizontalScale(24),
  paddingRight: horizontalScale(24),
  fontSize: moderateScale(16),
  fontFamily:
    fontFamily === 'jm'
      ? 'BaiJamjuree-Medium'
      : _lang === 'th'
      ? 'IBMPlexSansThai-Regular'
      : 'Inter-Regular',
  fontStyle: 'normal',
  justifyContent: 'center',
  fontWeight: _lang === 'th' ? '400' : '500'
})

export default StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    paddingVertical: verticalScale(16),
    borderWidth: 1,
    borderRadius: 24,
    color: colors.greyColorsGrey900
  },
  iconLeftContainerStyle: {
    marginLeft: horizontalScale(24)
  },
  iconRightContainerStyle: {
    marginRight: horizontalScale(24)
  },
  iconImageStyle: {
    height: 20,
    width: 20
  },
  empty: {
    marginLeft: horizontalScale(24 + 10)
  }
})
