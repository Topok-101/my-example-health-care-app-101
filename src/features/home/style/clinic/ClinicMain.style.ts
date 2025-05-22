import {Dimensions, StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {verticalScale} from 'helper'

const {width} = Dimensions.get('window')
export const stylesClinicMain = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: colors.white,
    top: verticalScale(-(164 - 118)),
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32
  },
  topContainer: {
    top: verticalScale(24)
  },
  containerTopContentClinic: {
    paddingHorizontal: verticalScale(24)
  },
  containerServiceClinic: {paddingTop: verticalScale(8)},
  containerMapClinic: {
    paddingTop: verticalScale(17),
    paddingHorizontal: verticalScale(24)
  },
  containerCardPackageClinic: {
    paddingTop: verticalScale(44),
    paddingHorizontal: verticalScale(24)
  },
  containerCardPackageClinicList: {
    width: (width - (27 / 2 + 24) * 2) / 2,
    paddingBottom: verticalScale(18)
  }
})
