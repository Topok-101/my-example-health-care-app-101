import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: horizontalScale(26.04),
    height: verticalScale(61),
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    borderRadius: 16
  },
  formSelectContainer: {
    flex: 1
    // marginBottom: verticalScale(36)
  },
  slectFlatlistContainer: {flex: 1},
  buttonContainer: {
    marginBottom: verticalScale(15)
  },
  termAndAgreeContainer: {
    marginBottom: verticalScale(10)
  },
  textLabelContainer: {
    marginTop: verticalScale(11),
    marginBottom: verticalScale(5)
  },
  formContainer: {
    paddingHorizontal: horizontalScale(24)
  },
  clinicListContainer: {
    paddingBottom: verticalScale(36),
    paddingHorizontal: horizontalScale(15)
  },
  textHeader: {
    marginTop: verticalScale(8)
  },
  clinicDetailContainer: {
    paddingTop: verticalScale(160)
  },
  relativeContainer: {
    position: 'relative'
  },
  rowContainer: {justifyContent: 'space-between', flexDirection: 'row'},
  line: {
    borderColor: colors.greyColorsGrey200,
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: verticalScale(4),
    marginBottom: verticalScale(16),
    marginHorizontal: horizontalScale(24)
  },
  row: {
    paddingHorizontal: horizontalScale(24),
    flex: 1,
  }
})

export default styles
