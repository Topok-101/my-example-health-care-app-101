import React, {FC} from 'react'
import {View} from 'react-native'
import Animated from 'react-native-reanimated'

import {IClinicDetailCard, IDoctorCard} from 'types/components'
import {MakeAppointmentFormProps} from 'types/features'

import {useAppointmentStore} from 'storez'

import {MakeAppointmentScreenStyle} from 'features/appointment/styles/makeAppointmentScreen'
import {animatedChangeSignUpStep} from 'features/auth/animations/animatedChangeSignUpStep'

import example from 'assets/image/example'

import SelectClinicForm from './SelectClinicForm'
import SelectDoctorForm from './SelectDoctorForm'

const AnimatedView = Animated.createAnimatedComponent(View)

const doctors: IDoctorCard[] = [
  {
    id: 0,
    name: 'นทพญ.ปวีณา ขำดำ',
    position: 'นักเทคนิคการแพทย์',
    clinic: 'BT Medical Clinic',
    img: example.doctor1
  },
  {
    id: 1,
    name: 'นพ.อดัม ลาวีน',
    position: 'แพทย์ผู้เชี่ยวชาญ',
    clinic: 'โรงพยาบาลกรุงเทพเชียงใหม่',
    img: example.doctor2
  },
  {
    id: 2,
    name: 'พญ.ยลดา หงษ์ลดา',
    position: 'นักมะเร็งวิทยา',
    clinic: 'โรงพยาบาลมหาราชเชียงใหม่',
    img: example.doctor3
  },
  {
    id: 3,
    name: 'ทนพ.ไกรวุฒิ แก้วมิตร',
    position: 'นักเทคนิคการแพทย์',
    clinic: 'BT Medical Clinic',
    img: example.doctor4
  },
  {
    id: 4,
    name: 'นทพญ.ปัจถมา สิงองค์ขวัญ',
    position: 'นักเทคนิคการแพทย์',
    clinic: 'BT Medical Clinic',
    img: example.doctor5
  }
]

const clinics: IClinicDetailCard[] = [
  {
    id: 0,
    address: 'เทศบาลตำบลหนองควาย  19km',
    dutyTime: '09:00 - 17:00',
    status: true,
    title: 'BT LAB - บีทีแล็ป'
  },
  {
    id: 2,
    address: 'เทศบาลตำบลหนองควาย  21km',
    dutyTime: '09:00 - 17:00',
    status: true,
    title: 'BT LAB - บีทีแล็ป'
  },
  {
    id: 3,
    address: 'เทศบาลตำบลหนองควาย  3km',
    dutyTime: '09:00 - 17:00',
    status: true,
    title: 'BT LAB - บีทีแล็ป'
  }
]
const MakeAppointmentFormStep5: FC<MakeAppointmentFormProps> = ({
  prevStep = 0,
  onChangeStep
}) => {
  const {formStep5, formStep4, setFormStep5, formCurrentStep} =
    useAppointmentStore()

  const {entering, exiting} = animatedChangeSignUpStep(
    prevStep,
    formCurrentStep
  )

  const handleNextStep = () => {
    onChangeStep(6)
  }
  const handleSelectDoctor = (doctor: IDoctorCard) => {
    setFormStep5({
      ...formStep5,
      doctor: doctor
    })
  }
  const handleSelectClinic = (clinic: IClinicDetailCard) => {
    setFormStep5({
      ...formStep5,
      clinic: clinic
    })

    handleNextStep()
  }
  return (
    <AnimatedView
      entering={entering}
      exiting={exiting}
      style={MakeAppointmentScreenStyle.formSelectContainer}>
      {formStep4.serviceType?.id === 0 && (
        <SelectDoctorForm
          onDoctorValueChange={handleSelectDoctor}
          selectedDoctor={doctors.find(
            doctor => doctor.id === formStep5.doctor?.id
          )}
          doctors={doctors}
          handleNextStep={handleNextStep}
        />
      )}
      {formStep4.serviceType?.id === 1 && (
        <SelectClinicForm
          clinics={clinics}
          onSelectClinic={handleSelectClinic}
        />
      )}
    </AnimatedView>
  )
}

export default MakeAppointmentFormStep5
