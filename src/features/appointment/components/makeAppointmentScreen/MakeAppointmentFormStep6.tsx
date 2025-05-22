import React, {FC} from 'react'
import {View} from 'react-native'
import Animated from 'react-native-reanimated'

import {MakeAppointmentFormProps} from 'types/features'

import {useAppointmentStore, useLoadingStore, useModalStore} from 'storez'

import {
  ClinicCard,
  ClinicDetailCard,
  InputAwesome,
  ScrollViewAware,
  TextHealthCare
} from 'components'
import {ButtonHealthCare} from 'components/button'
import {DisplayDate} from 'components/date-display'

import {AppointmentDetailStyle} from 'features/appointment/styles/appointmentDetailScreen'
import {MakeAppointmentScreenStyle} from 'features/appointment/styles/makeAppointmentScreen'
import {animatedChangeSignUpStep} from 'features/auth/animations/animatedChangeSignUpStep'
import FormHeader from 'features/auth/components/signup/SignUpFormHeader'
import loginStyle from 'features/auth/style/login.style'
import {signUpFormStyles} from 'features/auth/style/signup.style'

import {useNavigation} from '@react-navigation/native'

import {moderateScale, verticalScale} from 'helper'

import Images from 'assets/image/icons'

import {namesScreen} from 'const'

import {TextDisplayBox} from '../appointmentDetailScreen'
import CheckboxGroup from './CheckboxGroup'
import DoctorCard from './DoctorCard'

const AnimatedView = Animated.createAnimatedComponent(View)

const MakeAppointmentFormStep6: FC<MakeAppointmentFormProps> = ({
  prevStep = 0
}) => {
  const {formStep5, formStep4, formStep2, formCurrentStep, resetStep} =
    useAppointmentStore()
  const {setLoading} = useLoadingStore()

  const {setModal} = useModalStore()

  const navigation = useNavigation()

  const {entering, exiting} = animatedChangeSignUpStep(
    prevStep,
    formCurrentStep
  )

  const handleNextStep = () => {
    setLoading(true)
    setModal({
      image: 'SUCCESS',
      visible: true,
      title: '$completelyTitleModal',
      subTitle: '$resetPasswordCompletelySubTitle',
      onPress: () => {
        navigation.navigate('AppointmentDetailScreen', {
          id: namesScreen.AppointmentDetailScreen
        } as never)
        setModal({visible: false})
        resetStep()
      },
      onPressText: '$goToAppointmentScreen'
    })
  }

  return (
    <ScrollViewAware style={[loginStyle.scrollContainer]}>
      <AnimatedView entering={entering} exiting={exiting} style={{flex: 1}}>
        <View style={MakeAppointmentScreenStyle.formContainer}>
          <FormHeader
            headerTitle="$confirmAppointment"
            subHeader="$plaseCheckYourInformationAgain"
          />
          <View style={[signUpFormStyles.inputContainer]}>
            <InputAwesome iconLeft={Images.breifCase} value={'BT111500'} />
          </View>
          <View style={[signUpFormStyles.inputContainer]}>
            <InputAwesome
              iconLeft={Images.userOutline}
              value={formStep2.name}
            />
          </View>
          <View style={[signUpFormStyles.inputContainer]}>
            <InputAwesome iconLeft={Images.phone} value={formStep2.telephone} />
          </View>
          <TextHealthCare style={MakeAppointmentScreenStyle.textHeader}>
            การนัดหมาย
          </TextHealthCare>
          <CheckboxGroup data={formStep4.services} value={formStep4.services} />
        </View>
        {formStep4.serviceType?.id === 0 && formStep5.doctor && (
          <View style={MakeAppointmentScreenStyle.formContainer}>
            <TextHealthCare
              style={[
                MakeAppointmentScreenStyle.textHeader,
                {marginTop: verticalScale(18), marginBottom: verticalScale(6)}
              ]}>
              นัดหมายกับผู้เชี่ยวชาญ
            </TextHealthCare>
            <DoctorCard doctor={formStep5.doctor} checked />
          </View>
        )}
        {formStep4.serviceType?.id === 1 && formStep5.clinic && (
          <>
            <View style={MakeAppointmentScreenStyle.formContainer}>
              <TextHealthCare
                style={[
                  MakeAppointmentScreenStyle.textHeader,
                  {marginTop: verticalScale(18), marginBottom: verticalScale(6)}
                ]}>
                นัดหมายกับผู้เชี่ยวชาญ
              </TextHealthCare>
            </View>

            <View style={MakeAppointmentScreenStyle.relativeContainer}>
              <View style={[AppointmentDetailStyle.foreGroundContainer]}>
                <ClinicCard />
              </View>
              <View
                style={[
                  MakeAppointmentScreenStyle.formContainer,
                  MakeAppointmentScreenStyle.clinicDetailContainer
                ]}>
                <ClinicDetailCard clinicDetail={formStep5.clinic} />
              </View>
            </View>
          </>
        )}

        <View style={MakeAppointmentScreenStyle.formContainer}>
          <TextHealthCare style={AppointmentDetailStyle.textHeader}>
            วันเวลาที่นัดหมาย
          </TextHealthCare>
          <DisplayDate date="4 พฤศจิกายน 2565" time="10:00 น." />

          <TextHealthCare style={AppointmentDetailStyle.textHeader}>
            การเตรียมตัวก่อนเข้ารับการตรวจ
          </TextHealthCare>
          <TextDisplayBox label="งดทานน้ำและอาหารก่อนเข้ารับการตรวจ 12 ชั่วโมง" />

          <View style={[signUpFormStyles.buttonContainer]}>
            <ButtonHealthCare
              fontSize={moderateScale(16)}
              title="$confirm"
              onPress={handleNextStep}
              // disabled={disableNext}
            />
          </View>
        </View>
      </AnimatedView>
    </ScrollViewAware>
  )
}

export default MakeAppointmentFormStep6
