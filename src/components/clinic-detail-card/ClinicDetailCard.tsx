import React, {FC} from 'react'
import {TouchableOpacity, View} from 'react-native'

import {IClinicDetailCardProps} from 'types/components'

import {TextHealthCare} from 'components'

import {DoctorCardStyle} from 'features/appointment/styles/makeAppointmentScreen'

import {clinicDetailCardStyle} from './ClinicDetailCardStyle'

const ClinicDetailCard: FC<IClinicDetailCardProps> = ({
  clinicDetail,
  onPress,
  underline = false
}) => {
  const onClickClinicCard = () => {
    onPress && onPress(clinicDetail)
  }
  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.8 : 1}
      onPress={onClickClinicCard}>
      <View style={clinicDetailCardStyle.container}>
        {/* <View style={[clinicDetailCardStyle.cardImageContainer]}>
          <ClinicCard />
        </View> */}
        <View style={clinicDetailCardStyle.cardPackageContainer}>
          <View style={clinicDetailCardStyle.headerContainer}>
            <View style={clinicDetailCardStyle.leftHeaderContainer}>
              <TextHealthCare
                textType="bold"
                fontType="ibm"
                style={[clinicDetailCardStyle.textClinicTitle]}>
                {clinicDetail.title}
              </TextHealthCare>
              <View style={clinicDetailCardStyle.line} />
            </View>

            <View style={clinicDetailCardStyle.badgeStatus}>
              <TextHealthCare
                textType="medium"
                style={clinicDetailCardStyle.textStatus}>
                $open
              </TextHealthCare>
            </View>
          </View>
          <View style={clinicDetailCardStyle.textBottomContainer}>
            <View style={clinicDetailCardStyle.textPricePerContainer}>
              <TextHealthCare style={clinicDetailCardStyle.textAddress}>
                {clinicDetail.address}
              </TextHealthCare>
            </View>
            <View>
              <TextHealthCare style={clinicDetailCardStyle.textDutyTime}>
                {clinicDetail.dutyTime}
              </TextHealthCare>
            </View>
          </View>
        </View>
      </View>
      {underline && <View style={DoctorCardStyle.underline} />}
    </TouchableOpacity>
  )
}

export default ClinicDetailCard
