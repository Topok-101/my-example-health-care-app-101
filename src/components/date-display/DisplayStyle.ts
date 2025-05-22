import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const displayDateStyles = StyleSheet.create({
  container: {},
  dateContainer: {
    flex: 1,
    paddingLeft: horizontalScale(26.04),
    height: verticalScale(61),
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    borderRadius: 16
  },
  title: {
    fontSize: moderateScale(16),
    marginBottom: verticalScale(15)
  },
  displayTextContainer: {
    flexDirection: 'row',
    paddingTop: verticalScale(4)
  },
  displayText: {
    fontSize: moderateScale(16)
  },
  dot: {
    fontSize: moderateScale(16),
    marginHorizontal: horizontalScale(4)
  },
  image: {
    width: horizontalScale(24),
    height: verticalScale(24),
    marginRight: horizontalScale(6)
  }
})

export {displayDateStyles}
