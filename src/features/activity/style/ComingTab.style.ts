import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const ComingTabStyles = StyleSheet.create({
  container: {paddingHorizontal: horizontalScale(24)},
  subContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  nameContainer: {flexDirection: 'row'},
  imgClinic: {
    width: moderateScale(64),
    height: moderateScale(64),
    borderRadius: moderateScale(16)
  },
  containerIntroduce: {paddingLeft: horizontalScale(15)},
  fontName: {fontSize: moderateScale(16)},
  fontDescription: {fontSize: moderateScale(12), color: colors.blue600},
  containerDate: {flexDirection: 'row', alignItems: 'center'},
  date: {
    fontSize: moderateScale(12),
    color: colors.greyColorsGrey500,
    paddingLeft: horizontalScale(10)
  },
  line: {
    borderWidth: moderateScale(0.5),
    marginTop: verticalScale(13),
    marginBottom: verticalScale(15)
  }
})
