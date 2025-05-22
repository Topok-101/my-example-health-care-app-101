import { StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const styles = StyleSheet.create({

  carouselHeight: {flex: 1},
  dotStyle: {
    width: moderateScale(12.63),
    height: moderateScale(4),
    borderRadius: moderateScale(5),
    backgroundColor: colors.blue600,
  },
  inactiveColor: {
    backgroundColor: colors.blue600,
    opacity: 0.3
  },
  paginationContainer: {marginBottom: moderateScale(-60)},
  bottom16:{marginBottom: moderateScale(16)},
  activeDotStyle: {
    width: horizontalScale(12.63),
    height: verticalScale(4),
    backgroundColor: colors.blue600,
    marginHorizontal: moderateScale(1)
  },
  inactiveDotStyle: {
    width: horizontalScale(12.63),
    height: verticalScale(4),
    backgroundColor: colors.blue600,
    marginHorizontal: moderateScale(1),
    opacity: 0.3
  },  
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(19)
  }


})
