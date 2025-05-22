import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(20),
    color: colors.greyColorsGrey900,
    marginBottom: verticalScale(11),
    marginTop: verticalScale(23),
    marginLeft: horizontalScale(24),
  },
  carouselContainer: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    marginLeft: horizontalScale(24)
  },
  subContainer: {
    flexDirection: 'row',
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(25)
  },
  centerLeft: {justifyContent: 'center', alignItems: 'flex-start', width: horizontalScale(131)},
  right: {marginRight: horizontalScale(20)},
  titleText: {fontSize: moderateScale(16), color: colors.greyColorsGrey900},
  descText: {fontSize: moderateScale(12), color: colors.blue600}
})
