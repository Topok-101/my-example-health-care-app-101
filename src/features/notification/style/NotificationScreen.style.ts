import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  mgBottom27: {
    marginBottom: verticalScale(27)
  },
  mgLeft24: {marginLeft: horizontalScale(24)},
  mgRight14: {flex: 1, marginRight: horizontalScale(14)},
  mgRight8: {marginRight: horizontalScale(8)},

  flexRow: {
    flexDirection: 'row'
  },
  listContainer: {marginHorizontal: horizontalScale(17), flex: 1},
  font18: {fontSize: moderateScale(18)},
  font16: {fontSize: moderateScale(16)},
  font12: {fontSize: moderateScale(12)},

  avatarContiner: {
    padding: moderateScale(9),
    marginRight: horizontalScale(17)
  },
  imgContainer: {
    padding: moderateScale(9),
    borderRadius: moderateScale(16),
    backgroundColor: colors.blue50,
    marginRight: horizontalScale(17)
  },
  imgSize: {
    width: horizontalScale(64),
    height: verticalScale(64)
  },
  buttonContainer: {
    padding: moderateScale(9),
    borderRadius: moderateScale(16),
    backgroundColor: colors.blue50
  },
  buttonSize: {width: horizontalScale(18), height: verticalScale(18)}
})
