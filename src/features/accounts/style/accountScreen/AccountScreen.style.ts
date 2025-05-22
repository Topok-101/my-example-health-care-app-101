import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white
  },
  logout: {
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(50)
  }
})

export default styles
