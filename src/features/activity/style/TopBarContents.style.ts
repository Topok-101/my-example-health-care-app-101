import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const TopBarContentsStyles = StyleSheet.create({
  container: {backgroundColor: colors.white},
  subHeader: {
    paddingTop: verticalScale(28),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: horizontalScale(36),
    paddingRight: horizontalScale(32)
  },
  fontTitle: {fontSize: moderateScale(18), paddingTop: verticalScale(5)},
  Img: {width: moderateScale(24), height: moderateScale(24)},
  containerTab: {
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(15),
    paddingHorizontal: horizontalScale(24)
  }
})
