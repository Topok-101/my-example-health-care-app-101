import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'
import { horizontalScale, moderateScale, verticalScale } from 'helper'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: horizontalScale(24),
    paddingBottom: verticalScale(32),
    paddingTop: verticalScale(14),
    marginHorizontal: horizontalScale(15),
    borderRadius: moderateScale(16)
  },
  containerTitle: {paddingBottom: verticalScale(3)},
  fontTitle: {fontSize: moderateScale(16)},
  subContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: verticalScale(23)
  },
 containerList: {paddingLeft: horizontalScale(16)},
 description: {width: horizontalScale(250)}
})

export default styles
