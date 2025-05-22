import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: horizontalScale(26.04),
    height: verticalScale(61),
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    borderRadius: 16
  },
  displayText: {}
})

export default styles
