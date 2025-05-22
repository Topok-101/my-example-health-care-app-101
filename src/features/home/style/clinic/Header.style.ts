import {Dimensions, StyleSheet} from 'react-native'

import {horizontalScale, moderateScale, verticalScale} from 'helper'
import { colors } from 'configs/theme'

const {width} = Dimensions.get('window')
export const stylesHeader = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: width,
    paddingBottom: verticalScale(12)
  },
  conImge: {
    marginRight: horizontalScale(13),
    justifyContent: 'center'
  },
  text: {
    fontSize: moderateScale(18),
    color: colors.greyColorsGrey900,
    textAlign: 'center'
  },
  containerText: { alignItems: 'center'},
  img: {width: horizontalScale(64), height: verticalScale(19)}
})
