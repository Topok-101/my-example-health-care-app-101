import {Dimensions, StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(4),
    paddingBottom: verticalScale(26),
    paddingHorizontal: horizontalScale(24)
  },
  items: {
    marginTop: verticalScale(16),
    backgroundColor: colors.white,
    paddingLeft: horizontalScale(17),
    paddingTop: verticalScale(13),
    paddingBottom: verticalScale(11),
    justifyContent: 'center',
    borderRadius: moderateScale(16),
    width: horizontalScale(
      (Dimensions.get('window').width - (27 / 2 + 32) * 2) / 2
    )
  },
  text: {
    fontSize: moderateScale(18),
    paddingLeft: horizontalScale(4),
    paddingTop: verticalScale(8)
  }
})

export default styles
