import {StyleSheet} from 'react-native'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const ActiveDoctorStyle = StyleSheet.create({
  title: {fontSize: moderateScale(16), paddingBottom: verticalScale(12)},
  contentContainer: {
    flex: 1,
    maxWidth: horizontalScale(74),
    marginRight: horizontalScale(19),
    alignItems: 'center'
  },
  name: {
    fontSize: moderateScale(12),
    paddingTop: verticalScale(8),
    textAlign: 'center',
    lineHeight: moderateScale(18)
  }
})
