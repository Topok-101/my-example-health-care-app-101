import React from 'react'
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native'

import {TextHealthCare} from 'components'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

const {width} = Dimensions.get('window')

const TimeCard: React.FC<{
  index: number
  time: string
  active?: boolean
  callBack: (index: number, types: 'time' | 'date') => void
}> = props => {
  const {time, active, index, callBack} = props

  return (
    <TouchableOpacity
      onPress={() => callBack(index, 'time')}
      activeOpacity={0.5}
      style={{
        borderColor: active ? colors.blue600 : colors.greyColorsGrey200,
        backgroundColor: active ? colors.blue600 : colors.white,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: moderateScale(16),
        marginRight: horizontalScale(12),
        width: horizontalScale((width - (24 * 2 + 12 * (3 - 1))) / 3),
        height: verticalScale(40),
        marginBottom: verticalScale(12),
        paddingVertical: verticalScale(10),
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <TextHealthCare
        fontType="inter"
        style={{
          color: active ? colors.white : colors.greyColorsGrey900,
          fontSize: moderateScale(14)
        }}
        textType="medium">
        {time}
      </TextHealthCare>
    </TouchableOpacity>
  )
}

export default TimeCard
