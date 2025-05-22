import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const stylesTopContents = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerName: {alignItems: 'flex-start'},
  containerStatus: {alignItems: 'flex-end'},
  contentStatus: {
    backgroundColor: colors.greenOpacity,
    width: horizontalScale(55),
    height: verticalScale(36),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16
  },
  txtDescription: {
    color: colors.greyColorsGrey400,
    fontSize: moderateScale(12)
  },
  title: {
    fontSize: moderateScale(24),
    color: colors.greyColorsGrey900,
    width: horizontalScale(321 / 1.2)
  }
})
