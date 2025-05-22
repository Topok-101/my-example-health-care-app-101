import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {moderateScale, verticalScale} from 'helper'

export const styles = StyleSheet.create({
  container: {backgroundColor: colors.white, flex: 1},
  bgwhite: {backgroundColor: colors.white},
  bannerConatiner: {alignItems: 'center', marginBottom: verticalScale(-70)},
  text12Grey500: {fontSize: moderateScale(12), color: colors.greyColorsGrey500},
  text12Blue: {fontSize: moderateScale(12), color: colors.blue600},
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: verticalScale(9),
    marginTop: verticalScale(24)
  },
  mg12: {marginRight: 12}
})
