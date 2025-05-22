import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const styles = StyleSheet.create({
  skeletopnContainer: {
    flex: 1,
    height: verticalScale(48),
    marginTop: verticalScale(16)
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(24),
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginBottom: verticalScale(24),
    marginTop: verticalScale(16)
  },
  helloContainer: {flexDirection: 'row', alignItems: 'center'},
  helloText: {fontSize: moderateScale(14), color: colors.greyColorsGrey400},
  text14: {fontSize: moderateScale(14)},
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(8)
  },
  locationText: {flexDirection: 'row', alignItems: 'center'},
  locationSize: {width: horizontalScale(20), height: verticalScale(20)},
  textLocation: {
    fontSize: moderateScale(16),
    color: colors.greyColorsGrey900,
    marginHorizontal: horizontalScale(4)
  },
  notificationOutline: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(52) / moderateScale(2),
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bellSize: {width: moderateScale(24), height: moderateScale(24)},
  icon16: {width: horizontalScale(16), height: verticalScale(16)},
  bellcontainer: {flex: 1, alignItems: 'flex-end', justifyContent: 'center'}
})
