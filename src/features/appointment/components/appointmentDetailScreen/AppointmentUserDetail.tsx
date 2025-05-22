import React, {FC} from 'react'
import {View} from 'react-native'
import {LayoutChangeEvent} from 'react-native'
import Animated from 'react-native-reanimated'

import {IClinicDetailCard} from 'types/components'

import {
  ClinicCard,
  ClinicDetailCard,
  InputAwesome,
  TextHealthCare
} from 'components'
import {clinicDetailCardStyle} from 'components/clinic-detail-card/ClinicDetailCardStyle'

import Images from 'assets/image/icons'

import {AppointmentDetailStyle} from '../../styles/appointmentDetailScreen'
import TextDisplayBox from './TextDisplayBox'

const mockClinicDetail: IClinicDetailCard = {
  id: 0,
  address: 'เทศบาลตำบลหนองควาย  19km',
  dutyTime: '09:00 - 17:00',
  status: true,
  title: 'BT LAB - บีทีแล็ป'
}

const AppointmentUserDetail: FC<{
  cardOppacityAnimatedStyle: {
    opacity: number
  }
  cardPositionAnimatedStyle: {
    paddingTop: number
  }
  onClinicCardLayout: (event: LayoutChangeEvent) => void
}> = ({
  onClinicCardLayout,
  cardOppacityAnimatedStyle,
  cardPositionAnimatedStyle
}) => {
  return (
    <View onLayout={onClinicCardLayout}>
      <Animated.View
        style={[
          cardOppacityAnimatedStyle,
          // AppointmentDetailStyle.sectionContainer,
          clinicDetailCardStyle.cardAppointmentImageContainer,
          AppointmentDetailStyle.foreGroundContainer,
          {
            // top: verticalScale(-4),
            // left: horizontalScale(-16),
            zIndex: -99
          }
          // + verticalScale(14 + 325 + 199)
        ]}>
        <ClinicCard />
      </Animated.View>
      {/* <View 
        
        style={[
          // AppointmentDetailStyle.foreGroundContainer,
          AppointmentDetailStyle.sectionContainer,
          // {paddingTop: verticalScale(209 - 40)}
        ]}>
        */}

      <Animated.View
        style={[
          cardPositionAnimatedStyle,
          AppointmentDetailStyle.sectionContainer
        ]}>
        <ClinicDetailCard clinicDetail={mockClinicDetail} />
      </Animated.View>
      {/* </View> */}
      <View style={AppointmentDetailStyle.sectionContainer}>
        <View>
          <TextHealthCare style={AppointmentDetailStyle.textHeader}>
            การเตรียมตัวก่อนเข้ารับการตรวจ
          </TextHealthCare>
          <TextDisplayBox label="งดทานน้ำและอาหารก่อนเข้ารับการตรวจ 12 ชั่วโมง" />
        </View>
        <TextHealthCare style={AppointmentDetailStyle.textHeader}>
          ผู้เข้ารับบริการ
        </TextHealthCare>
        <View style={AppointmentDetailStyle.inputContainer}>
          <InputAwesome
            value="นาย จิราวัฒน์ แก้วกัน"
            iconLeft={Images.userOutline}
            editable={false}
          />
        </View>
        <View style={AppointmentDetailStyle.inputContainer}>
          <InputAwesome
            value="095 391 4956"
            iconLeft={Images.phone}
            editable={false}
          />
        </View>
        <View style={AppointmentDetailStyle.inputContainer}>
          <InputAwesome
            value="นางสาว นภัสวรรณ แสงงาม"
            iconLeft={Images.userOutline}
            editable={false}
          />
        </View>
        <View style={AppointmentDetailStyle.inputContainer}>
          <InputAwesome
            value="095 391 4956"
            iconLeft={Images.phone}
            editable={false}
          />
        </View>
      </View>
    </View>
  )
}

export default AppointmentUserDetail
