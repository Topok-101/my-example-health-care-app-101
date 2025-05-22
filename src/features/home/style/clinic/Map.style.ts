import {colors} from 'configs/theme'
import {horizontalScale, moderateScale, verticalScale} from 'helper'
import {StyleSheet} from 'react-native'

export const stylesMap = StyleSheet.create({
  containerMap: {
    height: verticalScale(132),
    overflow: 'hidden',
    borderRadius: 16
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  containerIcon: {
    backgroundColor: colors.blue50,
    padding: verticalScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: moderateScale(48 / 2)
  },
  icon: {width: horizontalScale(24), height: verticalScale(24)},
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: verticalScale(16)
  },
  subText: {
    fontSize: moderateScale(16),
    color: colors.greyColorsGrey500,
    paddingTop: verticalScale(8)
  },
  containerMarker: {
    backgroundColor: colors.blueOpacity,
    borderWidth: 1,
    borderColor: colors.blue200,
    padding: verticalScale(12),
    borderRadius: moderateScale(48 / 2)
  },
  markerIcon: {width: horizontalScale(18), height: verticalScale(20)}
})
