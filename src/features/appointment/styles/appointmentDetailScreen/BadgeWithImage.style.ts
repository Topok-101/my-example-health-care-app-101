import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  textTitle: {
    fontSize: moderateScale(16),
    marginLeft: horizontalScale(5),
    marginBottom: verticalScale(6)
  },
  badgeContainer: {
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(24),

    borderRadius: 24
  },
  badgeImage: {
    width: horizontalScale(24),
    height: verticalScale(24)
  },
  labelContainer: {
    fontSize: moderateScale(16)
  },
  badgeLabel: {
    fontSize: moderateScale(16)
  }
})

export default styles
