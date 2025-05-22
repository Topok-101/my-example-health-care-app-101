import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const FormLabelstyles = StyleSheet.create({
  container: {paddingLeft: horizontalScale(26),paddingBottom: verticalScale(22)},
  subContainer: {flexDirection: 'row'},
  font16: {fontSize: moderateScale(16)},
  pTop: {paddingTop: verticalScale(6)},
  right: {
    fontSize: moderateScale(32),
    color: colors.blue600
  },
  lvlup: {fontSize: moderateScale(16), //paddingTop: verticalScale(6 * 3)
  }
})
