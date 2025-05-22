import React, {FC, useEffect, useState} from 'react'
import {View} from 'react-native'
import Animated from 'react-native-reanimated'

import {ICheckBoxGroupValue} from 'types/components/check-box-type'
import {MakeAppointmentFormProps} from 'types/features'

import {useAppointmentStore} from 'storez'

import {ScrollViewAware, TextHealthCare} from 'components'
import {ButtonHealthCare} from 'components/button'

import {MakeAppointmentScreenStyle} from 'features/appointment/styles/makeAppointmentScreen'
import {animatedChangeSignUpStep} from 'features/auth/animations/animatedChangeSignUpStep'
import FormHeader from 'features/auth/components/signup/SignUpFormHeader'
import loginStyle from 'features/auth/style/login.style'
import {signUpFormStyles} from 'features/auth/style/signup.style'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'

import CheckboxGroup from './CheckboxGroup'
import RadioGroup from './RadioGroup'

const AnimatedView = Animated.createAnimatedComponent(View)

const mockData = [
  {id: 0, value: 'การขอคำปรึกษาสุขภาพ'},
  {id: 1, value: 'สอบถามข้อมูล'},
  {id: 2, value: 'นัดหมายเข้าตรวจสุขภาพ'}
]

const mockData2 = [
  {id: 0, value: 'ช่องทางแชท'},
  {id: 1, value: 'ที่คลีนิค'},
  {id: 2, value: 'รับบริการที่บ้าน'}
]
const MakeAppointmentFormStep4: FC<MakeAppointmentFormProps> = ({
  prevStep = 0,
  onChangeStep
}) => {
  const {formStep4, setFormStep4, formCurrentStep} = useAppointmentStore()
  const {entering, exiting} = animatedChangeSignUpStep(
    prevStep,
    formCurrentStep
  )

  const [disableNext, setDisableNext] = useState(true)

  useEffect(() => {
    if (formStep4.serviceType && formStep4.services.length > 0) {
      setDisableNext(false)
    } else {
      setDisableNext(true)
    }
  }, [formStep4])

  const handleNextStep = () => {
    if (formStep4.serviceType?.id === 2) {
      onChangeStep(6)
    } else {
      onChangeStep(5)
    }
  }

  const onCheckboxGroupChange = (value: ICheckBoxGroupValue[]) => {
    setFormStep4({
      ...formStep4,
      services: [...value]
    })
  }
  const onRadioGroupChange = (value: ICheckBoxGroupValue) => {
    setFormStep4({
      ...formStep4,
      serviceType: value
    })
  }
  return (
    <ScrollViewAware
      style={[
        loginStyle.scrollContainer,
        MakeAppointmentScreenStyle.formContainer
      ]}>
      <AnimatedView entering={entering} exiting={exiting}>
        <FormHeader
          headerTitle="$selectYourService"
          subHeader="$pleaseSelectYourService"
        />

        <View style={[signUpFormStyles.inputContainer]}>
          <CheckboxGroup
            data={mockData}
            value={formStep4.services}
            onValueChange={onCheckboxGroupChange}
          />
        </View>
        <View style={[MakeAppointmentScreenStyle.textLabelContainer]}>
          <TextHealthCare
            style={{
              color: colors.greyColorsGrey500,
              fontSize: moderateScale(16)
            }}>
            $serviceType
          </TextHealthCare>
        </View>
        <View style={[signUpFormStyles.inputContainer]}>
          <RadioGroup
            data={mockData2}
            value={formStep4.serviceType}
            onValueChange={onRadioGroupChange}
          />
        </View>

        <View style={[signUpFormStyles.buttonContainer]}>
          <ButtonHealthCare
            fontSize={moderateScale(16)}
            title="$next"
            onPress={handleNextStep}
            disabled={disableNext}
          />
        </View>
      </AnimatedView>
    </ScrollViewAware>
  )
}

export default MakeAppointmentFormStep4
