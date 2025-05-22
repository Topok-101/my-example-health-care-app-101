import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const CardTitleStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(16)
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: horizontalScale(22 / 2),
    paddingRight: horizontalScale(29),
    paddingBottom: verticalScale(10/ 2)
  },
  fontTitle: {fontSize: moderateScale(16)},
  fontRate: {fontSize: moderateScale(10), paddingTop: verticalScale(4)},
  containerCard: {alignSelf: 'center'}
})

export default CardTitleStyles
