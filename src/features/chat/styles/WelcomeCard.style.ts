import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const WelcomeCardStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    paddingVertical: verticalScale(16),
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(17),
  },
  blue: {color: colors.blue600},
  fontBtn: {fontSize: moderateScale(12), color: colors.greyColorsGrey400}
})
