import {StyleSheet} from 'react-native'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const ChatGridStyles = StyleSheet.create({
  container: {
    maxWidth: horizontalScale(236),
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(20),
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
    marginTop: verticalScale(24),
  }
})
