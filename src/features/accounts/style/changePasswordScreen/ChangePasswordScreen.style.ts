import {StyleSheet} from 'react-native'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const ChangePasswordScreenStyles = StyleSheet.create({
  header: {paddingTop: verticalScale(31), paddingLeft: horizontalScale(40)},
  containerTitle: {
    paddingTop: verticalScale(44),
    paddingHorizontal: horizontalScale(24),
    paddingBottom: verticalScale(8)
  },
  text24: {fontSize: moderateScale(24)},
  text16: {fontSize: moderateScale(16)},
  footer: {
    paddingTop: verticalScale(94),
    paddingHorizontal: horizontalScale(24),
    paddingBottom: verticalScale(130)
  },
  subContainer: {paddingHorizontal: horizontalScale(24)},
  titleinput: {fontSize: moderateScale(16), paddingVertical: verticalScale(16)}
})
