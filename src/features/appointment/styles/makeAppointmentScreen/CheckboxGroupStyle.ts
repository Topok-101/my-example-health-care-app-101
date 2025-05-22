import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const styles = StyleSheet.create({
  groupContainer: {},
  checkboxContainer: {
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    paddingHorizontal: horizontalScale(27),
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(17),
    borderRadius: 16,
    marginTop: verticalScale(6)
  },
  textLabel: {
    fontSize: moderateScale(18)
  }
})

export default styles
