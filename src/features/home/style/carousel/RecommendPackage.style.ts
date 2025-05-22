import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const styles = StyleSheet.create({
  carouselContainer: {
    backgroundColor: colors.blue100,
    borderRadius: moderateScale(16),
    marginHorizontal: horizontalScale(14),
    marginTop: verticalScale(15)
  },
  subContainer: {
    marginLeft: horizontalScale(34),
    marginRight: horizontalScale(17),
    marginVertical: verticalScale(22)
  },
  textConatiner: {
    marginLeft: horizontalScale(24),
    marginVertical: verticalScale(22),
    alignItems: 'flex-start'
  },
  titleText: {fontSize: moderateScale(20), color: colors.greyColorsGrey900},
  descText: {fontSize: moderateScale(12), color: colors.greyColorsGrey700},
  imageStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: moderateScale(16)
  },
  buttonConatiner: {
    marginRight: horizontalScale(122),
    marginTop: verticalScale(10)
  }
})
