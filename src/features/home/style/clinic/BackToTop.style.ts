import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const stylesBacktoTop = StyleSheet.create({
  continer: {
    alignItems: 'center',
    paddingTop: verticalScale(50 - 18),
    paddingBottom: verticalScale(69)
  },
  subContainer: {paddingHorizontal: horizontalScale(8)},
  img: {width: horizontalScale(12), height: verticalScale(12)},
  textAll: {fontSize: moderateScale(12), color: colors.greyColorsGrey400},
  textToTop: {fontSize: moderateScale(12), color: colors.blue400}
})
