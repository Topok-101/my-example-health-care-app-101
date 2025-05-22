import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {moderateScale, verticalScale} from 'helper'

export const smallInputStyles = StyleSheet.create({
  viewContainer: {
    display: 'flex',
    alignItems: 'center',

    overflow: 'hidden'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    textAlign: 'center',
    fontSize: moderateScale(24),
    paddingVertical: verticalScale(16),
    // marginVertical: verticalScale(24),
    height: verticalScale(64),
    borderWidth: 1.5,
    borderRadius: 16,
    backgroundColor: colors.white,
    color: colors.greyColorsGrey900,
    fontFamily: 'Inter-SemiBold'
  }
})
export const smallInputWithLabelStyles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden'
  }
})
