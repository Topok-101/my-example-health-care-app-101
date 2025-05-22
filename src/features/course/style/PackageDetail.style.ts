import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const styles = StyleSheet.create({
  mainConatiner: {
    width: horizontalScale(327),
    backgroundColor: colors.white,
    borderColor: colors.greyColorsGrey200,
    borderWidth: 1,
    borderRadius: moderateScale(16)
  },
  titleContainer: {
    paddingVertical: verticalScale(15),
    marginLeft: horizontalScale(23)
  },

  courseDetailContainer: {
    paddingVertical: verticalScale(15),
    marginLeft: horizontalScale(19),
    marginRight: horizontalScale(23)
  },
  text16Grey900: {
    fontSize: moderateScale(16),
    color: colors.greyColorsGrey900
  },
  text14Grey900: {
    fontSize: moderateScale(14),
    color: colors.greyColorsGrey900
  },
  text12Grey900: {
    fontSize: moderateScale(12),
    color: colors.greyColorsGrey900
  },
  text24Grey900: {
    fontSize: moderateScale(24),
    color: colors.greyColorsGrey900
  },
  text32Grey900: {
    fontSize: moderateScale(32),
    color: colors.greyColorsGrey900
  },
  itemContainer: {flexDirection: 'row', marginLeft: horizontalScale(16)},
  listContainer: {
    borderRadius: moderateScale(16),
    borderWidth: 1,
    paddingTop: verticalScale(23),
    paddingBottom: verticalScale(23),
    backgroundColor: colors.white,
    borderColor: colors.greyColorsGrey200,
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
    borderBottomWidth: 0,
    borderLeftWidth: 0.4,
    borderRightWidth: 0.4
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: horizontalScale(16),
    marginRight: horizontalScale(17),
    marginBottom: verticalScale(17)
  },
  line: {
    borderWidth: 0.75,
    borderColor: colors.greyColorsGrey200,
    marginLeft: horizontalScale(16),
    marginRight: horizontalScale(17),
    marginVertical: verticalScale(16)
  },
  image: {
    width: horizontalScale(18),
    height: moderateScale(18),
    marginRight: horizontalScale(9)
  },
  row22: {flexDirection: 'row', marginRight: 22},
  textGreen: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
    color: colors.green
  },
  butttonContainer: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(16)
  },
  textFreeContainer: {width: horizontalScale(142), height: moderateScale(36)},
  mg8: {marginRight: horizontalScale(8)}
})
