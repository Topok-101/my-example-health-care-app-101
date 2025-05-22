import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

export const diagnosisDetailStyle = StyleSheet.create({
  mainConatiner: {
    marginVertical: verticalScale(15),
    flex: 1,
    alignSelf: 'flex-start',
    marginHorizontal: horizontalScale(24)
  },
  text18Grey900: {fontSize: moderateScale(18), color: colors.greyColorsGrey900},
  width: {width: horizontalScale(327)},

  accordionContainer: {
    flex: 1,
    marginBottom: verticalScale(10),
    borderRadius: moderateScale(16),
    paddingHorizontal: horizontalScale(24),
    paddingTop: verticalScale(16),
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    marginHorizontal: horizontalScale(24)
    // flexDirection: 'row'
  },
  accordionContentContainer: {
    flex: 1,
    // backgroundColor: 'red',
    borderTopWidth: 0.75,
    borderTopColor: colors.greyColorsGrey300,
    paddingVertical: verticalScale(8)
  },
  textAccodionHeader: {
    fontSize: moderateScale(16)
  },
  textAccodionDesc: {
    fontSize: moderateScale(12)
  },
  listContainer: {
    flexDirection: 'row',
    marginBottom: verticalScale(14),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  mg16: {marginRight: horizontalScale(16), marginTop: verticalScale(10)},
  text16Black: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    flex: 1
  },
  text12Black: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(16.2),
    flex: 1
  },
  icon: {width: horizontalScale(24), height: moderateScale(24)}
})
