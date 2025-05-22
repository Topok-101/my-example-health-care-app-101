import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    paddingTop: verticalScale(23),
    paddingLeft: verticalScale(16),
    width: horizontalScale(327)
  },
  listConatiner: {
    flexDirection: 'row',
    marginBottom: verticalScale(14),
    alignItems: 'center'
  },
  text12Grey900: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(16.2),
    flex: 1,
    color: colors.greyColorsGrey900
  },
  text18Grey900: {fontSize: moderateScale(18), color: colors.greyColorsGrey900},
  mg6: {marginRight: verticalScale(6)},
  mgv15: {marginVertical: verticalScale(15)}
})
