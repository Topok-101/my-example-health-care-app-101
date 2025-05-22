import React from 'react'
import {View} from 'react-native'

import {ButtonHealthCare, TextHealthCare} from 'components'

import {AppointmentDetailStyle} from 'features/appointment/styles/appointmentDetailScreen'

import {horizontalScale, moderateScale} from 'helper'

const AppointmentDetailFooter = () => {
  return (
    <View style={AppointmentDetailStyle.footerContainer}>
      <View style={AppointmentDetailStyle.footerButtonContainer}>
        <View style={AppointmentDetailStyle.marginRight8}>
          <ButtonHealthCare
            type="outline"
            size="small"
            title="แชทสอบถาม"
            fontSize={moderateScale(16)}
          />
        </View>
        <ButtonHealthCare
          size="small"
          title="โทรเลย"
          fontSize={moderateScale(16)}
          width={horizontalScale(168)}
        />
      </View>
      <View style={AppointmentDetailStyle.textFooterCondition}>
        <TextHealthCare style={AppointmentDetailStyle.colorGray500}>
          *เงื่อนไขการเข้ารับบริการเป็นไปตามที่บริษัทกำหนด
        </TextHealthCare>
        <TextHealthCare style={AppointmentDetailStyle.colorGray500}>
          ถ้าหากมีข้อสงสัยกรุณาสอบถามกับ{' '}
          <TextHealthCare style={AppointmentDetailStyle.colorBlue600}>
            เจ้าหน้าที่
          </TextHealthCare>
        </TextHealthCare>
      </View>
    </View>
  )
}

export default AppointmentDetailFooter
