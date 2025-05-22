import {StyleSheet,Dimensions} from 'react-native'

import {horizontalScale, moderateScale, verticalScale} from 'helper'
import { colors } from 'configs/theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(24),
    borderTopWidth: 1,
    borderColor: colors.greyColorsGrey100,
    backgroundColor: colors.white,
    paddingBottom: verticalScale(20),
    paddingTop: verticalScale(16),
    width: Dimensions.get('window').width
  },
  containerList: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: moderateScale(16),
    paddingLeft: horizontalScale(8),
  }
})

export default styles
