import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {moderateScale, verticalScale} from 'helper'

export const styles = StyleSheet.create({
  mainConatiner: {marginVertical: verticalScale(24), alignItems: 'center'},
  text12Grey500: {fontSize: moderateScale(12), color: colors.greyColorsGrey500},
  text12Blue: {fontSize: moderateScale(12), color: colors.blue600},
  secondContainer: {flexDirection: 'row', marginTop: verticalScale(4)}
})
