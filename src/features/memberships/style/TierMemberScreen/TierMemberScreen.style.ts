import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {verticalScale} from 'helper'

export const TierMemberScreenStyles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(16),
    backgroundColor: colors.greyColorsGrey50,
    flex: 1
  },
  subContainer: {
    paddingTop: verticalScale(12),
    paddingBottom: verticalScale(16)
  },
  footer: {paddingTop: verticalScale(22), paddingBottom: verticalScale(74)}
})
