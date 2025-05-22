import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(24),
    flexDirection: 'row'
  },
  containerAvatar: {paddingRight: horizontalScale(16)}
})

export default styles
