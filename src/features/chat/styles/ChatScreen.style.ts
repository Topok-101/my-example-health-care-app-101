import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale} from 'helper'

export const ChatScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  contentContainerStyle: {paddingHorizontal: horizontalScale(24)},
  contentChatRoomStyle: {backgroundColor: colors.white, flex: 1}
})
