import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const HistoryStyles = StyleSheet.create({
  subContainer: {
    borderWidth: moderateScale(1),
    paddingHorizontal: horizontalScale(24),
    marginHorizontal: horizontalScale(24),
    paddingBottom: verticalScale(18),
    paddingTop: verticalScale(16),
    borderColor: colors.greyColorsGrey200,
    borderRadius: moderateScale(16),
    marginBottom: verticalScale(16)
  },
  containerDescription: {justifyContent: 'space-between', flexDirection: 'row'},
  font16: {fontSize: moderateScale(16)},
  font12: {fontSize: moderateScale(12)},
  blue: {color: colors.blue600},
  fontColorBlue: {fontSize: moderateScale(12), color: colors.blue600},
  imgClinic: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(8)
  },
  line: {
    borderColor: colors.greyColorsGrey200,
    marginTop: verticalScale(24),
    marginBottom: verticalScale(21)
  },
  containerFooterCard: {flexDirection: 'row', alignItems: 'center'},
  PIcon: {paddingBottom: verticalScale(6)},
  fontColorGray: {fontSize: moderateScale(12), color: colors.greyColorsGrey500}
})
