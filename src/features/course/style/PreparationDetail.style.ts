import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const styles = StyleSheet.create({
  mainConatiner: {marginVertical: verticalScale(15)},
  text18Grey900: {fontSize: moderateScale(18), color: colors.greyColorsGrey900},
  text12Black: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(16.2),
    color: colors.black
  },
  secondContainer: {
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    paddingVertical: verticalScale(17),
    paddingLeft: horizontalScale(19),
    paddingRight: horizontalScale(23),
    width: horizontalScale(327)
  }
})
