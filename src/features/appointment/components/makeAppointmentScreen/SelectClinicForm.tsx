import React, {FC} from 'react'
import {FlatList, View} from 'react-native'

import {IClinicDetailCard} from 'types/components'

import {ClinicCard, ClinicDetailCard} from 'components'
import {clinicDetailCardStyle} from 'components/clinic-detail-card/ClinicDetailCardStyle'

import {MakeAppointmentScreenStyle} from 'features/appointment/styles/makeAppointmentScreen'
import FormHeader from 'features/auth/components/signup/SignUpFormHeader'

const SelectClinicForm: FC<{
  clinics: IClinicDetailCard[]
  onSelectClinic?: (clinic: IClinicDetailCard) => void
}> = ({clinics, onSelectClinic}) => {
  const handleSelectClinic = (clinic: IClinicDetailCard) => {
    onSelectClinic && onSelectClinic(clinic)
  }
  return (
    <View style={[MakeAppointmentScreenStyle.formSelectContainer]}>
      <View style={MakeAppointmentScreenStyle.formContainer}>
        <FormHeader
          headerTitle="$nearlyClinic"
          subHeader="$pleaseSelectClinic"
        />
      </View>
      <View style={MakeAppointmentScreenStyle.slectFlatlistContainer}>
        <FlatList
          contentContainerStyle={[
            MakeAppointmentScreenStyle.formContainer,
            MakeAppointmentScreenStyle.clinicListContainer
          ]}
          data={clinics}
          keyExtractor={item => item.id.toString()}
          renderItem={clinic => {
            return (
              <View>
                <View style={[clinicDetailCardStyle.cardImageContainer]}>
                  <ClinicCard />
                </View>
                <View style={MakeAppointmentScreenStyle.clinicDetailContainer}>
                  <ClinicDetailCard
                    clinicDetail={clinic.item}
                    underline={clinic.index + 1 !== clinics.length}
                    onPress={handleSelectClinic}
                  />
                </View>
              </View>
            )
          }}
        />
      </View>
    </View>
  )
}

export default SelectClinicForm
