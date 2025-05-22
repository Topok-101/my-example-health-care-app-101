import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const ListLatestChatStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(16)
  },
  startContent: {flexDirection: 'row', alignItems: 'center'},
  description: {paddingLeft: horizontalScale(16)},
  font16: {fontSize: moderateScale(16)},
  colorblue600: {color: colors.blue600},
  endContent: {
    maxWidth: horizontalScale(132),
    fontSize: moderateScale(12),
    color: colors.greyColorsGrey400
  },
  timeContainer: {
    justifyContent: 'flex-end',
    top: verticalScale(6)
  },
  textTime: {fontSize: moderateScale(12), color: colors.greyColorsGrey500},
  line: {borderTopWidth: 1, borderTopColor: colors.greyColorsGrey100},
  title: {fontSize: moderateScale(16)}
})
