import {StyleSheet, Dimensions} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
  maxWidth: {width: width},
  conatiner: {
    marginHorizontal: verticalScale(24),
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    marginTop: verticalScale(16)
  },
  secondConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(21),
    marginLeft: horizontalScale(24)
  },
  imageConatiner: {flex: 1, borderRadius: moderateScale(16)},
  center: {alignItems: 'center'},
  row: {flexDirection: 'row'},
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  marginRight6: {marginRight: horizontalScale(6)},
  marginRight4: {marginRight: horizontalScale(4)},
  marginRight8: {marginRight: horizontalScale(8)},
  text16Grey900: {color: colors.greyColorsGrey900, fontSize: moderateScale(16)},
  text16Blue600: {
    fontSize: moderateScale(16),
    color: colors.blue600
  },
  text14Blue600: {
    fontSize: moderateScale(14),
    color: colors.blue600
  },
  text14Grey900: {
    color: colors.greyColorsGrey900,
    fontSize: moderateScale(14)
  },
  text40Blue600: {color: colors.blue600, fontSize: moderateScale(40)},
  text10Grey400: {color: colors.greyColorsGrey400, fontSize: moderateScale(10)},
  progressContainer: {marginBottom: 7, marginHorizontal: 8},
  remainingPointStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(-10),
    marginBottom: verticalScale(-5),
    width: horizontalScale(width/2),
  }
})
