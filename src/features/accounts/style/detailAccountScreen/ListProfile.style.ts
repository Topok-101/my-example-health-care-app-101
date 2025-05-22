import {StyleSheet} from 'react-native'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const styles = StyleSheet.create({
  subContainer: {
    paddingTop: verticalScale(8)
  },
  title: {paddingLeft: horizontalScale(5), fontSize: moderateScale(16)},
})

export default styles
