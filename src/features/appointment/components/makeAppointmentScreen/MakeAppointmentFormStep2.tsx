import React, {FC, useEffect, useState} from 'react'
import {KeyboardTypeOptions, View} from 'react-native'
import Animated from 'react-native-reanimated'

import {MakeAppointmentFormProps} from 'types/features'
import {IValidNPN} from 'types/hooks'

import {useAppointmentStore} from 'storez'

import {validateMinLength, validatePhone} from 'hooks/use-validation'

import {InputAwesome, ScrollViewAware, TextHealthCare} from 'components'
import {ButtonHealthCare} from 'components/button'

import {MakeAppointmentScreenStyle} from 'features/appointment/styles/makeAppointmentScreen'
import {animatedChangeSignUpStep} from 'features/auth/animations/animatedChangeSignUpStep'
import FormHeader from 'features/auth/components/signup/SignUpFormHeader'
import loginStyle from 'features/auth/style/login.style'
import {signUpFormStyles} from 'features/auth/style/signup.style'

import {moderateScale} from 'helper'

import Images from 'assets/image/icons'

const AnimatedView = Animated.createAnimatedComponent(View)

const MakeAppointmentFormStep2: FC<MakeAppointmentFormProps> = ({
  prevStep = 0,
  onChangeStep
}) => {
  const {formStep2, formCurrentStep, setFormStep2} = useAppointmentStore()

  const {entering, exiting} = animatedChangeSignUpStep(
    prevStep,
    formCurrentStep
  )

  const [statusName, setStatusName] = useState<IValidNPN>()
  const [statusPhoneNumber, setStatusPhoneNumber] = useState<IValidNPN>()
  const [disableNext, setDisableNext] = useState(true)

  useEffect(() => {
    const validatetName = validateMinLength(formStep2.name, 1)
    const validatePhoneNumber = validatePhone(formStep2.telephone)
    if (
      validatePhoneNumber?.status.isCorrect &&
      validatetName?.status.isCorrect
    ) {
      setDisableNext(false)
    } else {
      setDisableNext(true)
    }
  }, [formStep2])

  const formMakeAppointment = [
    {
      id: 0,
      placeholder: 'namePlaceholder',
      image: Images.userOutline,
      value: formStep2.name,
      onChange: (value: string) => handleChangeName(value),
      isError: statusName?.status.isError,
      isCorrect: statusName?.status.isCorrect,
      message: statusName?.message,
      keyboardType: 'default'
    },
    {
      id: 1,
      placeholder: 'phonePlaceholder',
      image: Images.phone,
      value: formStep2.telephone,
      onChange: (value: string) => handleChangePhoneNumber(value),
      isError: statusPhoneNumber?.status.isError,
      isCorrect: statusPhoneNumber?.status.isCorrect,
      message: statusPhoneNumber?.message,
      keyboardType: 'number-pad'
    }
  ]
  const handleChangePhoneNumber = (value: string) => {
    const validate = validatePhone(value)
    setStatusPhoneNumber(validate)
    setFormStep2({
      ...formStep2,
      telephone: value
    })
  }

  const handleChangeName = (value: string) => {
    const validate = validateMinLength(value, 1)
    setStatusName(validate)
    setFormStep2({
      ...formStep2,
      name: value
    })
  }

  const handleNextStep = () => {
    onChangeStep(3)
  }

  return (
    <ScrollViewAware
      style={[
        loginStyle.scrollContainer,
        MakeAppointmentScreenStyle.formContainer
      ]}>
      <AnimatedView entering={entering} exiting={exiting}>
        <FormHeader
          headerTitle="$specificYourInformation"
          subHeader="$plaseSpecifyYourAppointmentDetail"
        />
        {formMakeAppointment.map(item => (
          <View key={item.id} style={[signUpFormStyles.inputContainer]}>
            <InputAwesome
              iconLeft={item.image}
              placeholder={item.placeholder}
              value={item.value}
              onChangeText={item.onChange}
              isCorrect={item.isCorrect}
              isError={item.isError}
              keyboardType={item.keyboardType as KeyboardTypeOptions}
            />
            {item.isError && (
              <TextHealthCare style={signUpFormStyles.errorTextContainer}>
                *{item.message}
              </TextHealthCare>
            )}
          </View>
        ))}
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

export default MakeAppointmentFormStep2
