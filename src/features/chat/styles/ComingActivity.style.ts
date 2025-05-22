import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const ComingActivityStyles = StyleSheet.create({
  container: {paddingVertical: verticalScale(18)},
  border: {
    borderWidth: 1,
    borderRadius: moderateScale(16),
    borderColor: colors.greyColorsGrey200
  },
  containerCard: {
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(8)
  },
  title: {
    color: colors.greyColorsGrey400,
    paddingLeft: horizontalScale(12),
    paddingBottom: verticalScale(9)
  },
  subContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  startContent: {flexDirection: 'row'},
  startSubContent: {paddingLeft: horizontalScale(8), justifyContent: 'center'},
  description: {
    fontSize: moderateScale(12),
    marginBottom: verticalScale(-4),
    marginTop: verticalScale(4),
    color: colors.blue600
  },
  font16: {fontSize: moderateScale(16)},
  endContent: {alignItems: 'center'},
  descriptionEnd: {
    color: colors.greyColorsGrey500,
    marginBottom: verticalScale(-4),
    marginTop: verticalScale(4)
  },
  fontColor: {color: colors.greyColorsGrey500}
})
