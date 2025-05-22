import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const HeaderChatRoomStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(24),
    paddingTop: verticalScale(8)
  },
  subContainer: {flexDirection: 'row', alignItems: 'center', flex: 1},
  containerAvatar: {paddingHorizontal: horizontalScale(16)},
  font16: {fontSize: moderateScale(16)},
  fontOnline: {fontSize: moderateScale(12), color: colors.blue600},
  subContainerRight: {paddingRight: horizontalScale(14)},
  containerRight: {flexDirection: 'row'},
  iconL: {width: moderateScale(24), height: moderateScale(24)}
})
