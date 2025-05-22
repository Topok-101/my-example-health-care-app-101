import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const HowToAccumulateScreenStyles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  containerImage: {paddingTop: verticalScale(38), alignSelf: 'center'},
  containerText: {
    paddingHorizontal: horizontalScale(45),
    paddingTop: verticalScale(59)
  },
  textTop: {textAlign: 'center', fontSize: moderateScale(18)},
  textMid: {
    textAlign: 'center',
    paddingVertical: verticalScale(38),
    fontSize: moderateScale(12)
  },
  textBottom: {textAlign: 'center', fontSize: moderateScale(10)},
  list: {paddingTop: verticalScale(103), paddingBottom: verticalScale(64)}
})
