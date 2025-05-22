import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const styles = StyleSheet.create({
  img: {
    width: moderateScale(24),
    height: moderateScale(24)
  },
  carouselHeight: {flex: 1},
  carouselTitleText: {
    marginTop: moderateScale(14),
    fontSize: moderateScale(24),
    textAlign: 'center',
    color: colors.greyColorsGrey900
  },
  carouselDescriptionText: {
    fontSize: moderateScale(14),
    marginTop: moderateScale(12),
    textAlign: 'center',
    color: colors.greyColorsGrey900
  },
  imageContainer: {
    width: horizontalScale(375),
    height: verticalScale(381)
  },
  alignCenter: {
    alignItems: 'center',
    display: 'flex',
    paddingHorizontal: horizontalScale(58)
  },

  logoLeft: {
    width: moderateScale(82.32),
    height: moderateScale(21)
  },
  button: {
    width: moderateScale(56),
    height: moderateScale(56),
    borderRadius: 56 / 2,
    backgroundColor: colors.blue600,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(24)
  },
  dotStyle: {
    width: moderateScale(12),
    height: moderateScale(4),
    borderRadius: moderateScale(5),
    backgroundColor: colors.blue600
  },
  inactiveColor: {
    backgroundColor: colors.blue600,
    opacity: 0.3
  },
  buttonSignin: {
    marginBottom: verticalScale(16),
    width: '100%'
  },
  buttonSignUp: {
    width: '100%'
  },
  skip: {
    color: colors.greyColorsGrey400,
    fontSize: moderateScale(12)
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: verticalScale(-30),
    width: '100%'
  },
  backgroundGrey: {backgroundColor: colors.greyColorsGrey50, flex: 1},
  paginationItem: {
    width: horizontalScale(12.63),
    height: verticalScale(4),
    marginHorizontal: horizontalScale(2)
  },
  paginationContainer: {
    position: 'relative',
    marginTop: verticalScale(19),
    height: verticalScale(0)
  }
})
