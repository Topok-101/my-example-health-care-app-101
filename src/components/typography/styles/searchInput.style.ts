import {
  ImageStyle,
  Platform,
  StyleSheet,
  TextStyle,
  ViewStyle
} from 'react-native'

import {LanguageType} from 'types/zustand'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const _textInputSearchStyle = (
  _lang: LanguageType,
  isScanner: boolean
): TextStyle => ({
  paddingVertical:
    Platform.OS === 'android' ? verticalScale(16 / 2) : verticalScale(16),
  flex: 1,
  paddingLeft: horizontalScale(16),
  paddingRight: !isScanner ? horizontalScale(24) : 0,
  fontSize: moderateScale(16),
  fontFamily: _lang === 'th' ? 'IBMPlexSansThai-Regular' : 'Inter-Regular',
  fontStyle: 'normal',
  justifyContent: 'center',
  fontWeight: _lang === 'th' ? '400' : '500'
})

interface Style {
  container: ViewStyle
  iconLeftContainerStyle: ImageStyle
}

export default StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 24,
    borderColor: colors.greyColorsGrey200,
    backgroundColor: colors.greyColorsGrey50
  },
  iconLeftContainerStyle: {
    marginLeft: horizontalScale(18),
    width: horizontalScale(20),
    height: verticalScale(20)
  }
})
