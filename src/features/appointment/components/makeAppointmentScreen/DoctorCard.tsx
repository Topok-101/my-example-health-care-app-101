import React, {FC} from 'react'
import {TouchableOpacity, View} from 'react-native'

import {IDoctorCardProps} from 'types/components'

import {CheckboxHealthCare, JustImage, TextHealthCare} from 'components'

import {DoctorCardStyle} from 'features/appointment/styles/makeAppointmentScreen'

const DoctorCard: FC<IDoctorCardProps> = ({
  doctor,
  checked = false,
  onPress,
  underline = false,
  checkable = true
}) => {
  const onPressCard = () => {
    !checkable && onPress && onPress(doctor)
  }
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPressCard}>
      <View
        style={[
          DoctorCardStyle.container,
          {...(checked ? DoctorCardStyle.checkedContainer : {})}
        ]}>
        <View style={DoctorCardStyle.imageContainer}>
          <JustImage source={doctor.img} style={DoctorCardStyle.image} />
        </View>
        <View style={DoctorCardStyle.textContainer}>
          <TextHealthCare
            style={DoctorCardStyle.textNameDoctor}
            textType="semibold">
            {doctor.name}
          </TextHealthCare>
          <TextHealthCare style={DoctorCardStyle.textPosition} textType="medium">
            {doctor.position}
          </TextHealthCare>
          <TextHealthCare style={DoctorCardStyle.textClinic}>
            {doctor.clinic}
          </TextHealthCare>
        </View>
        <View style={DoctorCardStyle.checkboxContainer}>
          {checked && <CheckboxHealthCare value={checked} checkable={checkable} />}
        </View>
      </View>
      {underline && <View style={DoctorCardStyle.underline} />}
    </TouchableOpacity>
  )
}

export default DoctorCard
