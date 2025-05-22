import {isEmpty} from 'lodash'
import React, {FC, useEffect, useState} from 'react'
import {View} from 'react-native'
import Animated from 'react-native-reanimated'

import {IGenderType} from 'types/features/select-gender-type'
import {SignUpFormProps} from 'types/features/sign-up-type'

import {useSignUpStore} from 'storez'

import {ButtonHealthCare} from 'components/button'

import {animatedChangeSignUpStep} from 'features/auth/animations/animatedChangeSignUpStep'
import {signUpFormStyles} from 'features/auth/style/signup.style'

import {moderateScale} from 'helper'

import SelectGender from './SelectGender'
import FormHeader from './SignUpFormHeader'

const AnimatedView = Animated.createAnimatedComponent(View)

const SignUpFormStep3: FC<SignUpFormProps> = ({onChangeStep, prevStep = 0}) => {
  const {formStep3, setFormStep3, formCurrentStep} = useSignUpStore()
  const [disableNext, setDisableNext] = useState(true)
  const {entering, exiting} = animatedChangeSignUpStep(
    prevStep,
    formCurrentStep
  )
  useEffect(() => {
    if (isEmpty(formStep3.gender)) {
      setDisableNext(true)
    } else {
      setDisableNext(false)
    }
  }, [formStep3])

  const handleNextStep = () => {
    onChangeStep(4)
  }

  const handleSelectGender = (gender: IGenderType) => {
    setFormStep3({
      ...formStep3,
      gender
    })
  }

  return (
    <AnimatedView entering={entering} exiting={exiting}>
      <FormHeader headerTitle="$gender" subHeader="$plaseSelectGenderTitle" />

      <SelectGender
        onSelectGender={handleSelectGender}
        value={formStep3.gender}
      />
      <View style={[signUpFormStyles.buttonContainer]}>
        <ButtonHealthCare
          fontSize={moderateScale(16)}
          title="$next"
          onPress={handleNextStep}
          disabled={disableNext}
        />
      </View>
    </AnimatedView>
  )
}

export default SignUpFormStep3
