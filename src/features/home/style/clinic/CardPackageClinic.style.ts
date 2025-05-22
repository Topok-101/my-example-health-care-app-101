import {colors} from 'configs/theme'
import {horizontalScale, moderateScale, verticalScale} from 'helper'
import {StyleSheet} from 'react-native'

export const stylesCardPackage = (paddingB?: number) =>
  StyleSheet.create({
    paddingB: {
      paddingBottom: verticalScale(paddingB ? paddingB : 0)
    },
    Img: {
      height: verticalScale(150),
      backgroundColor: colors.greyColorsGrey300,
      borderRadius: 16
    },
    fontDescrip: {
      fontSize: moderateScale(12),
      color: colors.greyColorsGrey400
    },
    containerReadmore: {flexDirection: 'row', justifyContent: 'flex-end'},
    iconReadmore: {width: horizontalScale(12), height: verticalScale(12)}
  })
