import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const styles = StyleSheet.create({
  header: {backgroundColor: colors.white},
  container: {
    backgroundColor: colors.greyColorsGrey50,
    flex: 1
  },
  top: {
    alignSelf: 'center',
    paddingTop: verticalScale(24),
    paddingBottom: verticalScale(16)
  },
  fontLeftBar: {
    paddingLeft: horizontalScale(4),
    paddingBottom: verticalScale(7),
    fontSize: moderateScale(10),
    color: colors.greyColorsGrey500
  },
  fontRightBar: {
    paddingRight: horizontalScale(4),
    paddingBottom: verticalScale(7),
    fontSize: moderateScale(10),
    color: colors.greyColorsGrey500
  },
  containerBar: {
    paddingBottom: verticalScale(15)
  },
  contentContainer: {paddingBottom: verticalScale(64)}
})

export default styles
