import React, {FC} from 'react'
import {View} from 'react-native'
import Animated from 'react-native-reanimated'

import {SignUpFormProps} from 'types/features/sign-up-type'

import {useSignUpStore} from 'storez'

import {TextHealthCare} from 'components'
import {ButtonHealthCare} from 'components/button'
import SmallInput from 'components/typography/SmallInput'

import {animatedChangeSignUpStep} from 'features/auth/animations/animatedChangeSignUpStep'
import {signUpFormStyles} from 'features/auth/style/signup.style'

import {moderateScale} from 'helper'
import {formatToBC} from 'helper/formatYearOfBirth'

import FormHeader from './SignUpFormHeader'

const AnimatedView = Animated.createAnimatedComponent(View)

const SignUpFormStep4: FC<SignUpFormProps> = ({onChangeStep, prevStep}) => {
  const {formStep4, setFormStep4, formCurrentStep} = useSignUpStore()

  const {entering, exiting} = animatedChangeSignUpStep(
    prevStep,
    formCurrentStep
  )

  const handleNextStep = () => {
    onChangeStep(5)
  }

  const handleOnChangeAge = (age: string) => {
    let ageNum = Number(age)

    if (ageNum > 100) {
      ageNum = 100
    }
    if (isNaN(ageNum)) {
      ageNum = 0
    }
    setFormStep4({
      ...formStep4,
      yearOfBirth: ageNum.toString()
    })
  }

  const customLabel = (
    <TextHealthCare textType="semibold" style={{fontSize: moderateScale(16)}}>
      $youWhereBornWhen $BC {formatToBC(Number(formStep4.yearOfBirth))}
    </TextHealthCare>
  )

  return (
    <AnimatedView entering={entering} exiting={exiting}>
      <FormHeader
        headerTitle="$specifyYourAge"
        subHeader="$plaseSpecifyYourAge"
      />

      <SmallInput
        keyboardType="number-pad"
        customRenderLabel={customLabel}
        position="bottom"
        onChangeText={handleOnChangeAge}
        value={formStep4.yearOfBirth}
      />
      <View style={[signUpFormStyles.buttonContainer]}>
        <ButtonHealthCare
          title="$next"
          onPress={handleNextStep}
          fontSize={moderateScale(16)}
        />
      </View>
    </AnimatedView>
  )
}

export default SignUpFormStep4
