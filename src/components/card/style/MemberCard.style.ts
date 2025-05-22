import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {moderateScale, verticalScale} from 'helper'

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: 182,
    paddingLeft: 20
  },
  font: {
    fontSize: moderateScale(10),
    color: colors.white
  },
  textTitleContainer: {
    ...StyleSheet.absoluteFillObject
  },
  textTitle: {
    fontSize: moderateScale(40),
    color: colors.greyColorsGrey900,
    paddingTop: verticalScale(106),
    paddingLeft: verticalScale(78)
  },
  imageLogo: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: verticalScale(11),
    paddingLeft: verticalScale(24)
  }
})
