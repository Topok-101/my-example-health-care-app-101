import {StyleSheet} from 'react-native'

import {horizontalScale, moderateScale} from 'helper'

const ListHistoryPointStyles = StyleSheet.create({
  container: {flexDirection: 'row'},
  containerIcon: {justifyContent: 'center'},
  containerDescription: {paddingLeft: horizontalScale(16)},
  containerTitle: {fontSize: moderateScale(16), width: horizontalScale(171)},
  containerDate: {flexDirection: 'row', alignItems: 'center'},
  date: {paddingLeft: horizontalScale(8), fontSize: moderateScale(12)},
  containerBadge: {
    paddingRight: horizontalScale(22 - 13),
    paddingLeft: horizontalScale(21)
  }
})

export default ListHistoryPointStyles
