import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

const PADDINGHORIZENTAL = 24
export default StyleSheet.create({
  contents: {
    paddingTop: verticalScale(44),
    paddingHorizontal: horizontalScale(PADDINGHORIZENTAL)
  },
  containerPassword: {
    paddingTop: verticalScale(16)
  },
  containerDescriptionsUpInputLogin: {
    paddingTop: verticalScale(8)
  },
  containerBtn: {
    paddingTop: verticalScale(32)
  },
  containerRegisterYetLogin: {
    paddingVertical: verticalScale(24)
  },
  containerListSocial: {
    paddingBottom: verticalScale(16),
    paddingHorizontal: horizontalScale(PADDINGHORIZENTAL)
  },
  containerFlatlist: {
    backgroundColor: colors.white,
    flex: 1
  },
  scrollContainer: {
    flex: 1
  },
  containerSeparatorLogin: {
    paddingBottom: verticalScale(24)
  }
})
