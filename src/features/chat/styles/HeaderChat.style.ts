import {StyleSheet} from 'react-native'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const HeaderChatStyles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(19),
    paddingHorizontal: horizontalScale(36),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {fontSize: moderateScale(18)},
  containerIcons: {flexDirection: 'row', alignItems: 'center'},
  iconRight: {paddingRight: horizontalScale(20)}
})
