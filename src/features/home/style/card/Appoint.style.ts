import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const styles = StyleSheet.create({
  maxWidth: {width: '100%'},
  skeletopnContainer: {
    marginTop: verticalScale(24),
    height: verticalScale(213)
  },
  conatiner: {
    borderWidth: 1,
    borderRadius: moderateScale(16),
    borderColor: colors.greyColorsGrey200,
    marginTop: verticalScale(24),
    marginHorizontal: horizontalScale(24)
  },
  upcomingTextLayout: {
    paddingTop: verticalScale(12),
    paddingLeft: horizontalScale(16)
  },
  text14Grey400: {
    fontSize: moderateScale(14),
    color: colors.greyColorsGrey400
  },
  text14Grey500: {
    fontSize: moderateScale(14),
    color: colors.greyColorsGrey500
  },
  textBlue12: {
    fontSize: moderateScale(12),
    color: colors.blue600
  },
  textBlack16: {
    fontSize: moderateScale(16),
    color: colors.greyColorsGrey700
  },
  imageCalendarMg4: {
    width: horizontalScale(20),
    height: verticalScale(20),
    marginRight: horizontalScale(4)
  },
  imageCalendarMg8: {
    width: horizontalScale(20),
    height: verticalScale(20),
    marginRight: horizontalScale(8)
  },
  line: {
    borderWidth: 0.5,
    borderColor: colors.greyColorsGrey200,
    marginHorizontal: 24
  },
  doctorContainer: {
    flexDirection: 'row',
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(24),
    marginTop: verticalScale(12),
    borderWidth: 1,
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
    borderBottomWidth: 0,
    borderLeftWidth: 0.4,
    borderRightWidth: 0.4,
    borderColor: colors.greyColorsGrey200,
    justifyContent: 'space-between'
  },
  dateMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(24),
    marginVertical: verticalScale(18)
  },
  chatConatiner: {
    paddingHorizontal: horizontalScale(14),
    backgroundColor: colors.greenOpacity,
    borderRadius: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center'
  },
  textGreen: {
    fontSize: moderateScale(12),
    color: colors.green
  },
  horizonCenterLayout: {flexDirection: 'row', alignItems: 'center'},
  nameTag: {flex: 1}
})
