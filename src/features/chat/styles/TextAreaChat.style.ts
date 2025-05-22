import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

export const TextAreaChatStyle = StyleSheet.create({
  container: {
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.02,
    elevation: 5,
    backgroundColor: colors.white,
    padding: 24,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32
  }
})
