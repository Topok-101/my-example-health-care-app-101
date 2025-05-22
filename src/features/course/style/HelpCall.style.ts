import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const styles = StyleSheet.create({
  image: {
    width: horizontalScale(327),
    borderRadius: moderateScale(16),
    marginTop: verticalScale(16)
  },
  text20Grey900: {fontSize: moderateScale(20), color: colors.greyColorsGrey900},
  textContainer: {
    alignItems: 'flex-end',
    marginRight: horizontalScale(19),
    marginTop: verticalScale(6),
    marginBottom: verticalScale(6)
  }
})
