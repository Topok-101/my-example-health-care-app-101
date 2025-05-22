import React, {FC, useEffect, useState} from 'react'
import {View} from 'react-native'
import Animated from 'react-native-reanimated'

import {MakeAppointmentFormProps} from 'types/features'
import {IAppointmentFor} from 'types/zustand'

import {useAppointmentStore} from 'storez'

import {CheckboxHealthCare, ScrollViewAware, TextHealthCare} from 'components'
import {ButtonHealthCare} from 'components/button'

import {MakeAppointmentScreenStyle} from 'features/appointment/styles/makeAppointmentScreen'
import {animatedChangeSignUpStep} from 'features/auth/animations/animatedChangeSignUpStep'
import FormHeader from 'features/auth/components/signup/SignUpFormHeader'
import loginStyle from 'features/auth/style/login.style'
import {signUpFormStyles} from 'features/auth/style/signup.style'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'

const AnimatedView = Animated.createAnimatedComponent(View)

const customLabel = (
  <View
    style={[
      signUpFormStyles.termAndAgreeContainer,
      MakeAppointmentScreenStyle.termAndAgreeContainer
    ]}>
    <TextHealthCare>
      $iAgree
      <TextHealthCare style={{color: colors.blue600}}>$conditions</TextHealthCare>
      <TextHealthCare>$and</TextHealthCare>
      <TextHealthCare style={{color: colors.blue600}}>$policy</TextHealthCare>
      <TextHealthCare>$from</TextHealthCare>
      <TextHealthCare>$HealthCare</TextHealthCare>
    </TextHealthCare>
  </View>
)

const MakeAppointmentFormStep1: FC<MakeAppointmentFormProps> = ({
  prevStep = 0,
  onChangeStep
}) => {
  const [disableNext, setDisableNext] = useState(true)
  const {formCurrentStep, setFormStep1, formStep1} = useAppointmentStore()
  const {entering, exiting} = animatedChangeSignUpStep(
    prevStep,
    formCurrentStep
  )

  useEffect(() => {
    if (formStep1?.isAgree) {
      setDisableNext(false)
    } else {
      setDisableNext(true)
    }
  }, [formStep1])

  const handleClickAppointmentFor = (value: IAppointmentFor) => {
    setFormStep1({
      ...formStep1,
      makeAppointFor: value
    })

    handleNextStep()
  }

  const handleChangeIsAgree = (value: boolean) => {
    setFormStep1({
      ...formStep1,
      isAgree: value
    })
  }

  const handleNextStep = () => {
    if (formStep1.isAgree) {
      onChangeStep(2)
    }
  }

  return (
    <ScrollViewAware
      style={[
        loginStyle.scrollContainer,
        MakeAppointmentScreenStyle.formContainer
      ]}>
      <AnimatedView entering={entering} exiting={exiting}>
        <FormHeader
          headerTitle="$makeAppointment"
          subHeader="$makeAppointmentDesc"
        />

        <View style={[MakeAppointmentScreenStyle.buttonContainer]}>
          <ButtonHealthCare
            fontSize={moderateScale(16)}
            title="$makeWithYourSelf"
            onPress={() => handleClickAppointmentFor('own')}
            disabled={!formStep1.isAgree || disableNext}
          />
        </View>

        <View style={[MakeAppointmentScreenStyle.buttonContainer]}>
          <ButtonHealthCare
            fontSize={moderateScale(16)}
            title="$makeForOther"
            onPress={() => handleClickAppointmentFor('other')}
            disabled={!formStep1.isAgree || disableNext}
          />
        </View>
        <View style={[signUpFormStyles.inputContainer]}>
          <CheckboxHealthCare
            // boxType="square"
            customLabel={customLabel}
            value={formStep1.isAgree}
            onValueChange={handleChangeIsAgree}
          />
        </View>
      </AnimatedView>
    </ScrollViewAware>
  )
}

export default MakeAppointmentFormStep1
