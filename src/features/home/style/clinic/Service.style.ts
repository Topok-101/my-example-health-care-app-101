import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const stylesService = StyleSheet.create({
  titelContent: {
    fontSize: moderateScale(16),
    paddingLeft: horizontalScale(24),
    paddingBottom: verticalScale(12),
    color: colors.greyColorsGrey900
  },
  img: {
    width: horizontalScale(127),
    height: verticalScale(100),
    borderRadius: 16
  }
})
