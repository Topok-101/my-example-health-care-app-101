import React, {FC} from 'react'
import {FlatList, View} from 'react-native'

import {IDoctorCard} from 'types/components'

import {ButtonHealthCare} from 'components'

import {MakeAppointmentScreenStyle} from 'features/appointment/styles/makeAppointmentScreen'
import FormHeader from 'features/auth/components/signup/SignUpFormHeader'
import {signUpFormStyles} from 'features/auth/style/signup.style'

import DoctorCard from './DoctorCard'

const SelectDoctorForm: FC<{
  onDoctorValueChange: (doctor: IDoctorCard) => void
  selectedDoctor?: IDoctorCard
  doctors: IDoctorCard[]
  handleNextStep?: () => void
}> = ({onDoctorValueChange, doctors, selectedDoctor, handleNextStep}) => {
  return (
    <View
      style={[
        MakeAppointmentScreenStyle.formSelectContainer,
        MakeAppointmentScreenStyle.formContainer
      ]}>
      <FormHeader
        headerTitle="$selectAnExpert"
        subHeader="$pleaseSelectAnExpert"
      />

      <View style={MakeAppointmentScreenStyle.formSelectContainer}>
        <FlatList
          data={doctors}
          keyExtractor={item => item.id.toString()}
          renderItem={doctor => {
            return (
              <DoctorCard
                checkable={false}
                doctor={doctor.item}
                checked={selectedDoctor?.id === doctor.item.id}
                underline={doctor.index + 1 !== doctors.length}
                onPress={onDoctorValueChange}
              />
            )
          }}
        />
      </View>
      <View style={signUpFormStyles.buttonContainer}>
        <ButtonHealthCare
          title="$next"
          onPress={handleNextStep}
          disabled={selectedDoctor ? false : true}
        />
      </View>
    </View>
  )
}

export default SelectDoctorForm
