import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

const clinicCardStyle = StyleSheet.create({
  container: {
    position: 'relative',
    flex:1
  },
  image: {
    width: horizontalScale(375),
    height: verticalScale(209),
    borderRadius: 16
  },
  logo: {
    width: horizontalScale(115.7),
    height: verticalScale(34.01)
  },
  logoContainer: {
    position: 'absolute',
    top: verticalScale(8),
    left: horizontalScale(18),
    backgroundColor: colors.white,
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(14),
    paddingVertical: verticalScale(7),
    borderRadius: 16
  },
  mapIconContainer: {
    backgroundColor: colors.white,
    position: 'absolute',
    top: verticalScale(8),
    right: horizontalScale(9),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(12),
    borderRadius: 99
  },
  icon: {
    width: horizontalScale(24),
    height: verticalScale(24)
  }
})

export {clinicCardStyle}
